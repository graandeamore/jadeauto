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
    },[id]);

    return (
        <Layout>
            <div className={classes.CarPage}>
                <div className={classes['CarPage__visual']}>
                    <p className={classes['CarPage__title']}>{car.manufacturerName} {car.nameName}, {car.year} год</p>
                    <div className={classes['CarPage__visual-main']}>
                        <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                    </div>
                    <div className={classes['CarPage__visual-extends']}>                    {/*needs to be many and map 'em*/}
                        <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                        <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                        <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                        <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                        <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                        <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                        <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                        <img src={process.env.REACT_APP_API_URL + car.img} alt=''/>
                    </div>

                </div>
                <div className={classes['CarPage__info']}>
                    <p className={classes['CarPage__info-price']}><b>{car.price}</b> ₽</p>
                    <div className={classes['CarPage__info-details']}>
                        <p className={'CarItem__params-motor'}>{car.motor}</p>
                        <p className={'CarItem__params-drive'}>{car.drive} привод</p>
                        <p className={'CarItem__params-mileage'}>{car.mileage != 0 ? car.mileage + ' км' : 'без пробега'}</p>
                        <p className={classes['CarItem__offer-city']}>{car.city}</p>
                        <p className={classes['CarItem__offer-date']}>{car.date}</p>
                        <button>Купить</button>
                    </div>

                </div>
            </div>
        </Layout>
    );
})

export default CarPage;