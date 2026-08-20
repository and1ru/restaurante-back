import { defineConfig } from "prisma/config";
import { envs } from "./src/helper/envs";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: envs.db_url,
  },
});