import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const db_name = process.env.DB_NAME;
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

main().catch(err => console.log(err));

async function main() {
  console.log("Connecting to database");
  await mongoose.connect(`mongodb://${db_user}:${db_password}@${db_host}:${db_port}`);

  console.log("Connected to database!!!");
}

export default mongoose;
