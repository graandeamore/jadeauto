// CREATE HERE MODALSs
import React, {Component} from 'react';
import classes from "../../scss/CreateName.module.scss";

const CreateName = ({visible,setNameVisible}) => {
        return (
            <div className={visible ? classes.CreateName + ' '+ classes.visible : classes.CreateName} onClick={() => setNameVisible(false)}>
                <div className={visible ? classes.CreateName__data + ' '+ classes.visible : classes.CreateName__data} onClick={e => e.stopPropagation()}>
                    <form action="">
                        <p>Создать Название машины</p>
                        <input type="text" placeholder={'Название машины'}/>
                        <button>Добавить</button>
                    </form>
                </div>
            </div>
        );
}

export default CreateName;