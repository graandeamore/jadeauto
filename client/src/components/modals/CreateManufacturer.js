import React, {Component,useState} from 'react';
import classes from "../../scss/CreateManufacturer.module.scss";
import {createManufacturer} from "../../http/carAPI";

const CreateManufacturer = ({visible,setManufacturerVisible}) => {
    const [value, setValue] = useState('');

    const addManufacturer = () => {
        createManufacturer({name: value}).then(() => {
            setValue('')
        });
    };

        return (
            <div className={visible ? classes.CreateManufacturer + ' '+ classes.visible : classes.CreateManufacturer} onClick={() => setManufacturerVisible(false)}>
                <div className={visible ? classes.CreateManufacturer__data + ' '+ classes.visible : classes.CreateManufacturer__data} onClick={e => e.stopPropagation()}>
                    <form action="">
                        <p>Создать Производителя</p>
                        <input type="text" placeholder={'Название производителя'} onChange={e => setValue(e.target.value)}/>
                        <button onClick={addManufacturer}>Добавить</button>
                    </form>
                </div>
            </div>
        );
}

export default CreateManufacturer;