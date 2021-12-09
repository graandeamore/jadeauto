import {$host, $authHost} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (number, password) => {
    const {data} = await $host.post('api/user/registration', {number,password, role: 'ADMIN'})
    return jwtDecode(data.token)
}

export const login = async (number, password) => {
    const {data} = await $host.post('api/user/login', {number,password})
    return jwtDecode(data.token)
}

export const check = async () => {
    const response = await $host.post('api/user/auth',)
    return response
}