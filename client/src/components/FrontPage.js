import React from 'react';
import classes from '../scss/FrontPage.module.scss'
import Layout from '../utils/Layout'
import pic from '../graphics/60828600-1.webp'

const FrontPage = () => {
        return (
            <Layout>
                <div className={classes.FrontPage}  style={{backgroundImage: "url(" + pic + ")"}} >

                    <div className={classes['FrontPage__text']}>
                        <p className={classes['FrontPage__text-header']}>АВТО С ЯПОНИИ В КАЗАХСТАН</p>
                        <p className={classes['FrontPage__text-subheader']}>Подбор и доставка <br/>автомобилей <br/> с аукционов Японии</p>
                        <div className={classes['FrontPage__square']}></div>
                    </div>
                </div>
            </Layout>
        )
}

export default FrontPage;