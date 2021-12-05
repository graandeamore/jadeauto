//main page
import React from 'react';
import classes from '../scss/Jade.module.scss'
import Layout from "../utils/Layout";
import ManufacturerBar from '../components/ManufacturerBar'
import NameBar from "../components/NameBar";
import CarList from '../components/CarList'
const Jade = () => {
    return (
        <Layout>
            <div className={classes.Jade}>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <ManufacturerBar/>
                        <NameBar/>
                    </div>

                    <div className={classes.col}>
                        <CarList/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Jade;