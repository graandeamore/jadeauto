import React from 'react';
import classes from '../scss/Auth.module.scss'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts'
import Layout from "../utils/Layout";
import {useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(isLogin)
    return (
        <Layout>
            <div className={classes.Auth}>
                <h1>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
                <div className={classes['Auth__form']}>
                    <form action="">
                        <p>Телефон</p>
                        <p placeholder={'+7 (908) 999-99-29'}/>
                        <p>Пароль</p>
                        <input placeholder={'Введите пароль'}/>
                        <button>{isLogin ? 'Войти' : 'Регистрация'}</button>
                    </form>
                </div>
                <p>{isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}</p>
                {!isLogin ? <a href={LOGIN_ROUTE}>Войти</a> : <a href={REGISTRATION_ROUTE}>Регистрация</a>}
            </div>
        </Layout>
    );
};

export default Auth;