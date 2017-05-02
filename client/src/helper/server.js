import axios from 'axios'
import io from 'socket.io-client'
import store from '@/store'
import config from '../../../config'

const http = axios.create({ baseURL: `${config.ADDRESS}:${config.RESTFUL_PORT}/api/` })
const socket = io(`${config.ADDRESS}:${config.SOCKET_PORT}`)

socket.on('APIs', (data) => {
    console.log(data)
    store.commit('SOCKET_获得APIs', data)
})

socket.on('create APIs', (data) => {
    store.commit('SOCKET_新增APIs', data)
})

export {
    http,
    socket
}
