import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createManufacturer = async (manufacturer) => {
    const {data} = await $authHost.post('api/manufacturer', manufacturer)
    return data
}

export const fetchManufacturers = async () => {
    const {data} = await $host.get('api/manufacturer')
    return data
}

export const createCarName = async (CarName) => {
    const {data} = await $authHost.post('api/carname', CarName)
    return data
}

export const fetchCarNames = async () => {
    const {data} = await $host.get('api/carname', )
    return data
}

export const createCar = async (car) => {
    const {data} = await $authHost.post('api/car', car)
    return data
}

export const fetchCars = async (manufacturerId, nameId, page, limit= 5) => {
    const {data} = await $host.get('api/car', {params: {
            manufacturerId, nameId, page, limit
        }})
    return data
}

export const fetchOneCar = async (id) => {
    const {data} = await $host.get('api/car/' + id)
    return data
}