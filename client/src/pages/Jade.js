//main page
import React from 'react';
import classes from '../scss/Jade.module.scss'
import ManufacturerBar from '../components/ManufacturerBar'
import CarNameBar from "../components/CarNameBar";
import CarList from '../components/CarList'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {useContext, useEffect} from 'react'
import {fetchManufacturers,fetchCarNames, fetchCars} from '../http/carAPI'
import FrontPage from '../components/FrontPage'
import Pages from '../components/Pages'
const Jade = observer(() => {
    const {car} = useContext(Context)

    useEffect(() => {
        fetchManufacturers().then(data => car.setManufacturers(data))
        fetchCarNames().then(data => car.setCarNames(data))
        fetchCars(null, null, 1, 2).then(data => {
            car.setCars(data.rows)
            car.setTotalCount(data.count)
        })
    },[])

    useEffect(() => {
        fetchCars(car.selectedManufacturer.id, car.selectedCarName.id, car.page, 2).then(data => {
            car.setCars(data.rows)
            car.setTotalCount(data.count)
        })
    }, [car.page, car.selectedManufacturer, car.selectedCarName])


    return (
        <div className={classes.Jade}>
            <FrontPage/>
            <ManufacturerBar/>
            <CarNameBar/>
            <CarList/>
            <Pages/>
        </div>

    );
})

export default Jade;