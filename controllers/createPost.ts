import { HandlerFunc, Context } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import db from '../config/MongoClient.ts';
import { ErrorHandler } from '../middlewares/index.ts';

const database = db.getDatabase;
const posts = database.collection('posts');

interface Post {
  _id: { $oid: string };
  title: string;
  content: string;
  excerpt: string;
  tags: Array<string>;
  categories: Array<string>;
  created_at: Date;
  updated_at: Date;
  author: string;
  author_image: string;
}

export const createPost: HandlerFunc = async (ctx: Context) => {
  try {
    if ( ctx.request.headers.get("content-type") !== "application/json" )
      throw new ErrorHandler("Invalid body data", 400);
    
    const body = await (ctx.body());

    if ( !Object.keys(body).length )
      return ctx.string("Body is empty", 400);

    const { title, content, excerpt, tags, categories, author, author_image } = body;

    const insertPost = await posts.insertOne({
      title,
      content,
      excerpt,
      tags,
      categories,
      author,
      author_image
    });

    return ctx.json(insertPost, 201);
  } catch (error) {
    return ctx.json(error, 400);
  }
}