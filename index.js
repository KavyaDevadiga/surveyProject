import express from 'express'
import database from './database';
import start from './start';
import endpoint from './endpoint'

const server = express();             
const port = 8000;



database()

endpoint(server)

start(server)


