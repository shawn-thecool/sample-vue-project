import axios from 'axios'

// create axios instance
const instance = axios.create()

// set default header config
instance.defaults.headers['Accept'] = 'application/json'
instance.defaults.headers['Content-Type'] = 'application/json'

// set default header auth token
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

// set default config
// instance.defaults.baseURL = 'http://172.25.101.218:3000'
instance.defaults.baseURL = 'http://localhost:3000'
instance.defaults.timeout = 10000

// set default config - fn
instance.defaults.validateStatus = status => status >= 200 && status < 300 //default

// export fresh axios instance
export default instance
