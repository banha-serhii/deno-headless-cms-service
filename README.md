# Headless CMS Service powered by DENO
This test service aims to be a simple CRUD for fetching posts, create posts, update posts and delete posts. The service is written entirely using Deno and TypeScript.

## Getting Started
1. First install [Deno](https://deno.land) on your machine;
2. Then download/clone this repo and extract it anywhere;
3. Now, run this app with command `deno run --allow-write --allow-read --allow-plugin --allow-net --allow-env --unstable ./index.ts`

## App structure
As described above, this is a simple CRUD service. Written entirely in TypeScript (using Deno) and configured to connect with Mongodb databases.

* index.ts = Has all props to start the server and provide the routes;
* config = Has all configuration files, such as Database connection class;
* middlewares = Has all middlewares like ResponseHandler and ErrorHandler;
* controllers = Has all the routes provided in index.ts server file.

## Available endpoints
| Description | Method | Endpoint | Receives | Private |
|---|---|---|---|---|
| List all posts in Mongodb | GET | /v1/posts/list  | null | no |
| Store a single post in Mongodb | POST | /v1/posts/create | object | no |

### [GET] Returned Object structure
```json
[
  {
    "_id": {
        "$oid": "id"
    },
    "title": "Test post",
    "content": "Lorem ipsum set dolor sit amet consectetur adipiscing data",
    "excerpt": "Lorem ipsum set dolor.",
    "tags": [],
    "categories": [
        "teste"
    ],
    "author": "Author name",
    "author_image": "https://placehold.it/80x80"
  }
]
```

### [POST] Stored Object structure
```json
{
  "title": string,
  "content": string,
  "excerpt": strig,
  "tags": Array<string>,
  "categories": Array<string>,
  "author": string,
  "author_image": string
}
```

---

More features coming soon! - with a better documentation :p