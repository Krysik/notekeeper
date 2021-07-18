import { Sequelize } from "sequelize";
import logger from "./winston";

const ssl = process.env.PG_SSL;

const sequelize = new Sequelize({
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: +(process.env.PG_PORT as string) || 5432,
  dialect: 'postgres',
  dialectOptions: ssl ? { ssl: { require: true } } : {},
  logging: false,
})

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    logger.info('DB Connection has been established successfully');
  } catch (error) {
    logger.error('Error during establishing database connection');
    console.log(error);

  }
}

export {
  connectDb, sequelize
}
