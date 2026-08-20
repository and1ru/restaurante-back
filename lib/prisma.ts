import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";
import { envs } from "../src/helper/envs";

const adapter = new PrismaMariaDb({
  host: envs.db_host,
  user: envs.db_user,
  password: envs.db_password,
  database: envs.db_database,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

export { prisma };