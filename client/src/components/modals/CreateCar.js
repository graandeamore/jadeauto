import React, {useContext} from 'react';
import {Context} from "../../index";
import classes from "../../scss/CreateCar.module.scss";

const CreateCar = ({visible,setCarVisible}) => {
    const {car} = useContext(Context)
    return (
        <div className={visible ? classes.CreateCar + ' '+ classes.visible : classes.CreateCar} onClick={() => setCarVisible(false)}>
            <div className={visible ? classes.CreateCar__data + ' '+ classes.visible : classes.CreateCar__data} onClick={e => e.stopPropagation()}>
                <form action="">

                    <p>Производитель</p>
                    <select>
                        {car.manufacturers.map(manufacturer =>
                            <option value={manufacturer.id} key={manufacturer.id}>{manufacturer.name}</option>
                        )}
                    </select>

                    <p>Название</p>
                    <select>
                        {car.names.map(name =>
                            <option value={name.id} key={name.id}>{name.name}</option>
                        )}
                    </select>
                    <p>Стоимость</p>
                    <input type="text"/>
                    <p>Пробег</p>
                    <input type="text"/>
                    <p>Двигатель</p>
                    <input type="text"/>
                    <p>Привод</p>
                    <input type="text"/>
                    <p>Город</p>
                    <input type="text"/>
                    <p>Дата добавления</p>
                    <input type="text" value={new Date().toLocaleString() + ''}/>
                    <p>Фото</p>
                    <input type="file"/>
                    <hr/>
                    <button>Добавить</button>
                </form>
            </div>
        </div>
    );
}


export default CreateCar;