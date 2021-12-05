import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row,Col} from 'react-bootstrap'
import CarItem from "./CarItem";

const CarList = observer(() => {
    const {car} = useContext(Context)
    return (
        <Row>
            {car.cars.map(car =>
                <CarItem
                    key={car.id}
                    car={car}
                />
            )}
        </Row>
    );
})

export default CarList;