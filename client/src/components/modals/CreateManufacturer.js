import React, {Component} from 'react';
import classes from "../../scss/CreateManufacturer.module.scss";

const CreateManufacturer = ({visible,setManufacturerVisible}) => {
        return (
            <div className={visible ? classes.CreateManufacturer + ' '+ classes.visible : classes.CreateManufacturer} onClick={() => setManufacturerVisible(false)}>
                <div className={visible ? classes.CreateManufacturer__data + ' '+ classes.visible : classes.CreateManufacturer__data} onClick={e => e.stopPropagation()}>
                    <form action="">
                        <p>Создать Производителя</p>
                        <input type="text" placeholder={'Название производителя'}/>
                        <button>Добавить</button>
                    </form>
                </div>
            </div>
        );
}

export default CreateManufacturer;