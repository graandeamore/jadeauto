import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import CarItem from "./CarItem";
import classes from '../scss/CarList.module.scss'

const CarList = observer(() => {
    const {car} = useContext(Context)
    return (
        <div className={classes.CarList}>
            {car.cars.map(car =>
                <CarItem
                    key={car.id}
                    car={car}
                />
            )}
        </div>
    );
})

export default CarList;