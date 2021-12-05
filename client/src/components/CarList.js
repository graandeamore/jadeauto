import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import CarItem from "./CarItem";

const CarList = observer(() => {
    const {car} = useContext(Context)
    return (
        <div >
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