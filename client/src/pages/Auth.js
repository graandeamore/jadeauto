import React from 'react';
import classes from '../scss/Auth.module.scss'
import {REGISTRATION_ROUTE} from '../utils/consts'
const Auth = () => {
    return (
        <div className={classes.Auth}>
            <h1>Авторизация</h1>
            <form action="">
                <input placeholder={'Введите номер телефона'}/>
                <input placeholder={'Введите пароль'}/>
            </form>
            <span>Нет аккаунта?</span>
            <a href={REGISTRATION_ROUTE}>Регистрация</a>
        </div>
    );
};

export default Auth;