import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";
import "https://deno.land/x/denv/mod.ts";

// @ts-ignore
await init()

class Database {

  public client: MongoClient;

  constructor(public dbName: string, public url: string) {
    this.dbName = dbName;
    this.url = url;
    this.client = {} as MongoClient;
  }

  connect() {
    const client = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;
  }

  get getDatabase() {
    return this.client.database(this.dbName);
  }

}

const dbName = Deno.env.get("DB_NAME") || "";
const dbHost = Deno.env.get("DB_HOST") || "";
const db = new Database(dbName, dbHost);

db.connect();

export default db; 