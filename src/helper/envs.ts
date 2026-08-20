import "dotenv/config"

export const envs = {
    db_url: process.env.DATABASE_URL!,
    db_host: process.env.DATABASE_HOST!,
    db_user: process.env.DATABASE_USER!,
    db_password: process.env.DATABASE_PASSWORD!,
    db_database: process.env.DATABASE_NAME!,
}