import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import classes from "../scss/ManufacturerBar.module.scss";
import Layout from '../utils/Layout'
const ManufacturerBar = observer (() => {
    const {car} = useContext(Context)
    return (                                            // State for all-view
        <Layout>
            <div className={classes['ManufacturerBar']}>
                <div className={classes['Sort__container-title']}>
                    <p>Производитель:</p>
                </div>

                <div className={classes['Sort__container-options']}>
                    {car.manufacturers.map(manufacturer =>
                        <div className={classes['Sort__container-element']}
                             style={manufacturer.id === car.selectedManufacturer.id ? {borderBottom:"2px solid #CD3319"} : {borderBottom:"none"}}  //make selected option visible
                             key={car.id}
                             onClick={() => car.setSelectedManufacturer(manufacturer)}
                        >
                            {manufacturer.name}
                        </div>
                    )}
                </div>
            </div>
        </Layout>

    );
})
export default ManufacturerBar;