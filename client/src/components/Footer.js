import React from 'react';
import classes from '../scss/Footer.module.scss';
import logo from '../assets/original.png'
import Layout from "../utils/Layout";

const Footer = () => {
    return (
        <Layout>
            <div className={classes['Footer']}>
                <div className={classes['Footer__line']}/>
                <div className={classes['Footer__container']}>

                    <div className={classes['Footer__column-logo']}>
                        <div className={classes['Footer__column-logo-icon']} style={{backgroundImage: `url("${logo}")`}}
                        />
                        <div className={classes['Footer__column-logo-description']}>
                            <p>Jade Auto</p>
                            <p>Владивосток / Казахстан</p>
                        </div>
                    </div>

                    <div className={classes['Footer__column-about']}>
                        <p>Подбор и доставка <br/>автомобилей <br/>с аукционов Японии</p>
                    </div>
                    <div className={classes['Footer__column-requisites']}>
                        <p>Тел: <a href="tel:+79089999929">+7 (908) 999-99-29</a></p>
                        <p>Email: <a href="mailto:jadeautovl@mail.ru">jadeautovl@mail.ru</a></p>
                        <p>Адрес: <a href="https://go.2gis.com/tz6ay6">Приморский край, <br/> г. Владивосток, Тухачевского 45</a></p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Footer;