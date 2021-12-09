import axios from "axios";

const $host = axios.create({                    //for not auth queries
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({                    //for auth required will proceed header-auth
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {                     //get token
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)     //proceed token

export {
    $host,
    $authHost
}
