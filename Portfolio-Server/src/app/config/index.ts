import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  // Environment
  NODE_ENV: process.env.NODE_ENV,

  // Port
  port: process.env.PORT,

  // Database URL
  db_url: process.env.DB_URL,

  // Bcrypt Salt Rounds
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,

  // JWT Secrets and Expiry
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,

  // Admin Credentials
  admin_email: process.env.ADMIN_EMAIL,
  admin_password: process.env.ADMIN_PASSWORD,
  admin_profile_photo: process.env.ADMIN_PROFILE_PHOTO,

  // Cloudinary Credentials
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,

  // Email Configuration
  sender_email: process.env.SENDER_EMAIL,
  sender_app_password: process.env.SENDER_APP_PASS,
  reset_pass_ui_link: process.env.RESET_PASSWORD_UI_LINK,

  // MeiliSearch Configuration
  meilisearch_host: process.env.MEILISEARCH_HOST,
  meilisearch_master_key: process.env.MEILISEARCH_MASTER_KEY,
};
