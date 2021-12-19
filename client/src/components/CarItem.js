import React from 'react';
import classes from '../scss/CarItem.module.scss'
import {useNavigate} from 'react-router-dom';
import {CAR_ROUTE} from "../utils/consts";
const CarItem = ({car}) => {
    const navigate = useNavigate();
    return (
        <div className={classes['CarItem-container']} onClick={() => navigate(CAR_ROUTE + '/' + car.id)}>
            <div className={classes.CarItem}>
                <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                <div className={classes['CarItem__info']}>
                    <div className={classes['CarItem__params']}>
                        <p className={'CarItem__params-title'}>{car.manufacturerName} {' '}  {car.nameName}, {car.year}</p>
                        <p className={'CarItem__params-motor'}>{car.motor}</p>
                        <p className={'CarItem__params-drive'}>{car.drive} привод</p>
                        <p className={'CarItem__params-mileage'}>{car.mileage !== 0 ? car.mileage + ' км' : 'без пробега'}</p>
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