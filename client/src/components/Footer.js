import React from 'react';
import classes from '../scss/Footer.module.scss';
import Layout from '../utils/Layout'
const Footer = () => {
    return (
        <div className={classes['Footer']}>
            <Layout>
                    <p>Jade Auto Владивосток / Казахстан</p>
            </Layout>
        </div>
    );
};

export default Footer;