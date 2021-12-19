import React,{useEffect, useState} from 'react';
import Layout from "../utils/Layout";
import classes from "../scss/CarPage.module.scss";
import {useParams} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {fetchOneCar} from "../http/carAPI";

const CarPage = observer(() => {

    const [car, setCar] = useState({info: []});
    const {id} = useParams();

    useEffect( () => {
        fetchOneCar(id).then(data => setCar(data));
    },[]);

    return (
        <Layout>
            <div className={classes.CarPage}>
                <div className={classes['CarPage__visual']}>
                    <p className={classes['CarPage__title']}>{car.manufacturerName} {car.nameName}, {car.year} год</p>
                    <div className={classes['CarPage__visual-images']}>
                        <div className={classes['CarPage__visual-images-main']}>
                            <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                        </div>
                        <div className={classes['CarPage__visual-images-extends']}>
                            <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                            <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                            <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                            <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                            <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                        </div>

                    </div>
                </div>
                <div className={classes['CarPage__info']}>
                    <p className={classes['CarPage__info-price']}><b>{car.price}</b> ₽</p>

                    <div className={classes['CarPage__info-details']}>
                        <div className={classes['CarPage__info-details-item']}>
                            <p className={classes['CarItem__params-details-item-def']}>Двигатель:</p>
                            <p className={classes['CarItem__params-motor']}>{car.motor}</p>
                        </div>

                        <div className={classes['CarPage__info-details-item']}>
                            <p className={classes['CarItem__params-details-item-def']}>Привод:</p>
                            <p className={classes['CarItem__params-drive']}>{car.drive}</p>
                        </div>

                        <div className={classes['CarPage__info-details-item']}>
                            <p className={classes['CarItem__params-details-item-def']}>Пробег:</p>
                            <p className={classes['CarItem__params-mileage']}>{car.mileage !== 0 ? car.mileage + ' км' : 'без пробега'}</p>
                        </div>

                        <div className={classes['CarPage__info-details-item']}>
                            <p className={classes['CarItem__params-details-item-def']}>Город:</p>
                            <p className={classes['CarItem__params-city']}>{car.city}</p>
                        </div>

                        <div className={classes['CarPage__info-details-item']}>
                            <p className={classes['CarItem__params-details-item-def']}>Дата добавления:</p>
                            <p className={classes['CarItem__params-date']}>{car.date}</p>
                        </div>
                        <div className={classes['CarPage__info-details-button']}>Купить</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
})

export default CarPage;