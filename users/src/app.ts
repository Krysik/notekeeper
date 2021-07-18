import dotenv from 'dotenv';

dotenv.config();
import { connectDb } from './services/database';

const main = async () => {
  await connectDb();
}

main();

