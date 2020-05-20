import { Application } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import { getPosts, createPost } from "./controllers/index.ts";
import { ErrorMiddleware } from './middlewares/index.ts';
import "https://deno.land/x/denv/mod.ts";

const app = new Application();

app.use(ErrorMiddleware);

const port = Deno.env.get("APP_PORT") || 3030;

app.get('/posts/list', getPosts)
   .post('/posts/create', createPost)
   .start({port: Number(port)});

console.log(`Server listening on port ${port}`);