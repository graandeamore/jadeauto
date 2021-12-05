import React from 'react';
import {Col} from 'react-bootstrap'

const CarItem = ({car}) => {
    return (
        <Col>
            <p>Название: {car.name}</p>
            <p>Цена: {car.price} руб.</p>
            <p>Год: {car.year}</p>
            <p>Двигатель: {car.engine}</p>
            <p>Привод: {car.drive}</p>
            <p>Пробег: {car.mileage}км.</p>
        </Col>
    );
};

export default CarItem;