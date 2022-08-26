import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "./entity/Category";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 13306,
  username: "root",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User, Category],
  migrations: [],
  subscribers: [],
});
