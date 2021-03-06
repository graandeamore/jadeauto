//admin panel
import React, {useContext, useEffect, useState} from 'react';
import Layout from "../utils/Layout";
import CreateName from "../components/modals/CreateName";
import CreateManufacturer from "../components/modals/CreateManufacturer";
import DeleteCarName from "../components/modals/DeleteCarName";
import DeleteManufacturer from "../components/modals/DeleteManufacturer";
import DeleteCar from "../components/modals/DeleteCar";
import StatusCar from '../components/modals/StatusCar'
import CreateCar from "../components/modals/CreateCar";
import ManufacturerBar from '../components/ManufacturerBar'
import CarNameBar from '../components/CarNameBar'
import CarList from '../components/CarList'
import {Context} from "../index";
import {fetchManufacturers,fetchCarNames, fetchCars} from '../http/carAPI'
import classes from '../scss/Admin.module.scss'
import {observer} from "mobx-react-lite";
import Footer from "../components/Footer";

const Admin = observer(() => {
    const [ManufacturerVisible, setManufacturerVisible] = useState(false)
    const [CarNameVisible, setCarNameVisible] = useState(false)
    const [CarVisible, setCarVisible] = useState(false)
    const [deleteManufacturerVisible, setDeleteManufacturerVisible] = useState(false)
    const [deleteCarNameVisible, setDeleteCarNameVisible] = useState(false)
    const [deleteCarVisible, setDeleteCarVisible] = useState(false)
    const [statusCarVisible, setStatusCarVisible] = useState(false)
    const {car} = useContext(Context)

    useEffect(() => {
        fetchManufacturers().then(data => car.setManufacturers(data))
        fetchCarNames().then(data => car.setCarNames(data))
        fetchCars(null,null,1, 10).then(data => {
            car.setCars(data.rows)
            car.setTotalCount(10)
        })
    }, [car.page,car.selectedManufacturer,car.selectedCarName, car._limit])

    return (
        <Layout>
            <div className={classes['Admin']}>
                <div className={classes['Admin__panel']}>
                    <p>???????????? ????????????????????????????</p>
                    <div
                        className={classes['Admin__panel-button']}
                        onClick={()=> setManufacturerVisible(true)}>???????????????? ??????????????????????????</div>
                    <div
                        className={classes['Admin__panel-button']}
                        onClick={()=> setCarNameVisible(true)}>???????????????? ????????????????????????</div>
                    <div
                        className={classes['Admin__panel-button']}
                        onClick={()=> setCarVisible(true)}>???????????????? ????????????</div>
                    <div
                        className={classes['Admin__panel-button']}
                        onClick={()=> setDeleteManufacturerVisible(true)}>?????????????? ??????????????????????????</div>
                    <div
                        className={classes['Admin__panel-button']}
                        onClick={()=> setDeleteCarNameVisible(true)}>?????????????? ????????????????</div>
                    <div
                        className={classes['Admin__panel-button']}
                        onClick={()=> setDeleteCarVisible(true)}>?????????????? ????????????</div>
                    <div
                        className={classes['Admin__panel-button']}
                        onClick={()=> setStatusCarVisible(true)}>???????????? ????????????</div>

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
                <DeleteManufacturer
                    visible={deleteManufacturerVisible}
                    setDeleteManufacturerVisible={setDeleteManufacturerVisible}
                />
                <DeleteCarName
                    visible={deleteCarNameVisible}
                    setDeleteCarNameVisible={setDeleteCarNameVisible}
                />
                <DeleteCar
                    visible={deleteCarVisible}
                    setDeleteCarVisible={setDeleteCarVisible}
                />
                <StatusCar
                    visible={statusCarVisible}
                    setStatusCarVisible={setStatusCarVisible}
                />
            </div>
            <ManufacturerBar/>
            <CarNameBar/>
            <CarList/>
            <Footer/>
        </Layout>
    );
})

export default Admin;