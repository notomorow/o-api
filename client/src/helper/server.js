import axios from 'axios'
import io from 'socket.io-client'
import config from '../../../config'

const http = axios.create({
    baseURL: `${config.ADDRESS}:${config.RESTFUL_PORT}/api/`
})

const socket = io(`${config.ADDRESS}:${config.SOCKET_PORT}`)

export {
    http,
    socket
}
