import React from 'react';
import classes from "../../src/scss/Layout.module.scss";

const Layout = props => {
    return (
        <div className={classes['Layout']}>
            {props.children}
        </div>
    );
};

export default Layout;