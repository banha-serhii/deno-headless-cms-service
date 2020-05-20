import { HandlerFunc, Context } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import db from '../config/MongoClient.ts';
import { ErrorHandler } from '../middlewares/index.ts';

const database = db.getDatabase;
const posts = database.collection('posts');

export const getPosts: HandlerFunc = async (ctx: Context) => {
  try {
    const list = await posts.find({});
    return ctx.json(list, 200);
  } catch (err) {
    throw new ErrorHandler(err.message, err.status || 500);
  }
}