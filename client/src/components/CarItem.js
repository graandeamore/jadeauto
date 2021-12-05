import React from 'react';

const CarItem = ({car}) => {
    return (
        <div style={{border: 'solid 1px white'}}>
            <p>Название: {car.name}</p>
            <p>Цена: {car.price} руб.</p>
            <p>Год: {car.year}</p>
            <p>Двигатель: {car.engine}</p>
            <p>Привод: {car.drive}</p>
            <p>Пробег: {car.mileage}км.</p>
        </div>
    );
};

export default CarItem;