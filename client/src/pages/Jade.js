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
                        <ManufacturerBar/>
                        <NameBar/>
                        <CarList/>
                </div>
        </Layout>
    );
};

export default Jade;