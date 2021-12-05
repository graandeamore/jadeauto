import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import classes from "../scss/ManufacturerBar.module.scss";

const ManufacturerBar = observer (() => {
    const {car} = useContext(Context)
    return (                                            // State for all-view
        <div className={classes['ManufacturerBar']}>
            <div className={classes['Sort__container-title']}>
                <p>Производитель:</p>
            </div>
            <div className={classes['Sort__container-options']}>
                {car.manufacturers.map(manufacturer =>
                    <div className={classes['Sort__container-element']}
                         style={manufacturer.id === car.selectedManufacturer.id ? {borderBottom:"2px solid #CD3319"} : {borderBottom:"none"}}  //make selected option visible
                         key={car.id}
                         onClick={() => car.SetSelectedManufacturer(manufacturer)}
                    >
                        {manufacturer.name}
                    </div>
                )}
            </div>

        </div>

    );
})
export default ManufacturerBar;