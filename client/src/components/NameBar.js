import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import classes from "../scss/NameBar.module.scss";

const NameBar = observer(() => {
    const {car} = useContext(Context)
    return (
        <div className={classes['NameBar']}>
            <div className={classes['Sort__container-title']}>
                <p>Название:</p>
            </div>
            <div className={classes['Sort__container-options']}>   {car.cars.map(name =>
                <div className={classes['Sort__container-element']}
                     style={name.id === car.selectedName.id ? {borderBottom:"2px solid #CD3319"}: {borderBottom:"none"}}
                     key={name.id}
                     onClick={()=> car.SetSelectedName(name)}
                >
                    {name.name}
                </div>
            )}</div>

        </div>
    );
})
export default NameBar;