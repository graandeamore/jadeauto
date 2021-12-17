import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import classes from "../scss/CarNameBar.module.scss";
import Layout from '../utils/Layout'

const CarNameBar = observer(() => {
    const {car} = useContext(Context)

    return (
        <Layout>
            <div className={classes['CarNameBar']}>
                <div className={classes['Sort__container-title']}>
                    <p>Название:</p>
                </div>
                <div className={classes['Sort__container-options']}>
                    {car.carNames.map(carName =>
                        <div className={classes['Sort__container-element']}
                             style={carName.id === car.selectedCarName.id ? {borderBottom:"2px solid #CD3319"}: {borderBottom:"none"}}
                             key={carName.id}
                             onClick={()=> car.setSelectedCarName(carName)}
                        >
                            {carName.name}
                        </div>
                    )}</div>
            </div>
        </Layout>

    );
})
export default CarNameBar;