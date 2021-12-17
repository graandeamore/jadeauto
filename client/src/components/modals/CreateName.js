// CREATE HERE MODALSs
import React, {Component, useState} from 'react';
import classes from "../../scss/CreateName.module.scss";
import {createCarName} from "../../http/carAPI";

const CreateName = ({visible,setNameVisible}) => {
    const [value, setValue] = useState('');

    const addCarName = () => {
        createCarName({name: value}).then(() => {
            setValue('')
        });
    };
        return (
            <div className={visible ? classes.CreateName + ' '+ classes.visible : classes.CreateName} onClick={() => setNameVisible(false)}>
                <div className={visible ? classes.CreateName__data + ' '+ classes.visible : classes.CreateName__data} onClick={e => e.stopPropagation()}>
                    <form action="">
                        <p>Создать Название машины</p>
                        <input type="text" placeholder={'Название машины'} onChange={e => setValue(e.target.value)}/>
                        <button onClick={addCarName}>Добавить</button>
                    </form>
                </div>
            </div>
        );
}

export default CreateName;