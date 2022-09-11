// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// Environment
export const MONGO_URL = process.env.MONGO_URL
export const PORT = process.env.PORT
