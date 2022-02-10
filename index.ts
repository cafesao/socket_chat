import { io, server } from './src/server'

const PORT = 4000

io.on('connection', (socket) => {
  console.log('New client connected')
  console.log(socket)
})

server.listen(PORT, () => {
  console.log(`Server start in Port ${PORT}`)
})
