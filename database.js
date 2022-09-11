import mongoose from 'mongoose'
import { MONGO_URL } from './env'

// Retry connection
const connectWithRetry = () => {
    console.info('MongoDB connection with retry')
    return mongoose.connect(MONGO_URL)
  }
  
  // Exit application on error
  mongoose.connection.on('error', err => {
    setTimeout(connectWithRetry, 5000)
  })
  
  mongoose.connection.on('connected', () => {
    console.info('MongoDB is connected')
  })
  
  // Connect database
  export default function () {
    console.info('SETUP - Connecting database..')
    connectWithRetry()
  }
  