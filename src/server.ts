import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'

import Routes from './routes/routes'

const api = express()

api.use(express.json())
api.use(cors())
api.use('/api', Routes)

const server = createServer(api)

const io = new Server(server)

export { server, io }
