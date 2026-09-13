import "dotenv/config"

export const envs = {
    db_url: process.env.DATABASE_URL!,
    db_host: process.env.DATABASE_HOST!,
    db_user: process.env.DATABASE_USER!,
    db_password: process.env.DATABASE_PASSWORD!,
    db_database: process.env.DATABASE_NAME!,
    cl_cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    cl_api_key: process.env.CLOUDINARY_API_KEY!,
    cl_api_secret: process.env.CLOUDINARY_API_SECRET!,
    jwt_secret: process.env.JWT_SECRET!
}