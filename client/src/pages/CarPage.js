import React from 'react';
import Layout from "../utils/Layout";
import classes from "../scss/CarPage.module.scss";

const CarPage = () => {
    const car =  {id: 3,price: 2451230,year: 2020,motor: '123TRV',drive: 'Полный',  mileage: 4500, city:'Владивосток', date:'12-10-2001', img: '../../../server/static/ea1331fb-48f2-4031-aaf2-38927f1462fa.jpg'}
    return (
        <Layout>
            <div className={classes.CarPage}>

                <p className={classes['CarPage__title']}>Name,manufacturer, {car.year}</p>

                <div className={classes['CarPage__visual']}>
                    {/*{car.img.map(img => {*/}
                    {/*    <img src={car.img} alt="" onClick={}/>*/}
                    {/*})}*/}
                </div>
                <div className={classes['CarPage__info']}>
                    <p className={classes['CarPage__info-price']}><b>{car.price}</b> ₽</p>
                    <div className={classes['CarPage__info-details']}>
                        <p className={'CarItem__params-motor'}>{car.motor}</p>
                        <p className={'CarItem__params-drive'}>{car.drive} привод</p>
                        {car.mileage !== 0 ? <p className={'CarItem__params-mileage'}>{car.mileage} км.</p>: <p className={'CarItem__params-mileage'}>Без пробега</p> }
                        <p className={classes['CarItem__offer-city']}>{car.city}</p>
                        <p className={classes['CarItem__offer-date']}>{car.date}</p>
                        <button>Купить</button>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default CarPage;