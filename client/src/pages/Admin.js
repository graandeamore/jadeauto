//admin panel
import React, {useContext, useEffect, useState} from 'react';
import Layout from "../utils/Layout";
import CreateName from "../components/modals/CreateName";
import CreateManufacturer from "../components/modals/CreateManufacturer";
import CreateCar from "../components/modals/CreateCar";
import ManufacturerBar from '../components/ManufacturerBar'
import CarNameBar from '../components/CarNameBar'
import CarList from '../components/CarList'
import {Context} from "../index";
import {fetchManufacturers,fetchCarNames, fetchCars} from '../http/carAPI'
import classes from '../scss/Admin.module.scss'
import Pages from '../components/Pages'
import {observer} from "mobx-react-lite";
import Footer from '../components/Footer'

const Admin = observer(() => {
    const [ManufacturerVisible, setManufacturerVisible] = useState(false)
    const [CarNameVisible, setCarNameVisible] = useState(false)
    const [CarVisible, setCarVisible] = useState(false)

    const {car} = useContext(Context)

    useEffect(() => {
        fetchManufacturers().then(data => car.setManufacturers(data))
        fetchCarNames().then(data => car.setCarNames(data))
        fetchCars(null,null,1, car.limit).then(data => {
            car.setCars(data.rows)
            car.setTotalCount(data.count)
        })
    },[])

    useEffect(() => {
        fetchCars(car.selectedManufacturer.id,car.selectedCarName.id,car.page,  car.limit).then(data => {
            car.setCars(data.rows)
            car.setTotalCount(data.count)
        })
    }, [car.page,car.selectedManufacturer,car.selectedCarName])


    return (
        <Layout>
            <div className={classes['Admin']}>
                <div className={classes['Admin__panel']}>
                    <p>Панель администратора</p>
                    <div
                        className={classes['Admin__panel-button']}
                        onClick={()=> setManufacturerVisible(true)}>Добавить производителя</div>
                    <div
                        className={classes['Admin__panel-button']}
                        onClick={()=> setCarNameVisible(true)}>Добавить наименование</div>
                    <div
                        className={classes['Admin__panel-button']}
                        onClick={()=> setCarVisible(true)}>Добавить машину</div>
                </div>
                <CreateManufacturer
                    visible={ManufacturerVisible}
                    setManufacturerVisible={setManufacturerVisible}
                />
                <CreateName
                    visible={CarNameVisible}
                    setNameVisible={setCarNameVisible}
                />
                <CreateCar
                    visible={CarVisible}
                    setCarVisible={setCarVisible}
                />
            </div>
            <ManufacturerBar/>
            <CarNameBar/>
            <CarList/>
            <Pages/>
        </Layout>
    );
})

export default Admin;