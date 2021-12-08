import React from 'react';
import classes from '../scss/CarItem.module.scss'

const CarItem = ({car}) => {
    return (
        <div className={classes['CarItem-container']}>
            <div  className={classes.CarItem}>
                <img src={car.img} alt=''/>
                <div className={classes['CarItem__info']}>
                    <div className={classes['CarItem__params']}>
                        <p className={'CarItem__params-title'}>Name,manufacturer, {car.year}</p>
                        <p className={'CarItem__params-motor'}>{car.motor}</p>
                        <p className={'CarItem__params-drive'}>{car.drive} привод</p>
                        {car.mileage !== 0 ? <p className={'CarItem__params-mileage'}>{car.mileage} км.</p>: <p className={'CarItem__params-mileage'}>Без пробега</p> }
                    </div>
                    <div className={classes['CarItem__offer']}>
                        <p className={classes['CarItem__offer-price']}><b>{car.price}</b> ₽</p>
                        <p className={classes['CarItem__offer-city']}>{car.city}</p>
                        <p className={classes['CarItem__offer-date']}>{car.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarItem;