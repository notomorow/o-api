import axios from 'axios'
import config from '../../../config'

export default axios.create({
    baseURL: `http://192.168.1.105:${config.RESTFUL_PORT}/api/`
})
