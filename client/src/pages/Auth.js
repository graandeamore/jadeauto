import React, {useState,useContext, useEffect} from 'react';
import classes from '../scss/Auth.module.scss'
import {JADE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts'
import Layout from "../utils/Layout";
import {useLocation, useNavigate} from "react-router-dom";
import {registration,login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Auth = observer(() => {
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const {user} = useContext(Context)

    useEffect( () => { //navigate to homepage after login
        if (user.isAuth) {
            navigate(JADE_ROUTE)
        }
    }, [])

    const click = async () => {
        try {
            let data
            if (isLogin) {
                    data = await login(number, password);
                } else {
                    data = await registration(number, password);
                }
                user.setUser(true)
                user.setIsAuth(true)

        } catch (e){
            alert(e.response.data.message)
        }
    }

    return (
        <Layout>
            <div className={classes.Auth}>
                <h1>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
                <div className={classes['Auth__form']}>
                    <form action="">
                        <p>Телефон</p>
                        <input
                            type='text'
                            placeholder={'+7 (908) 999-99-29'}
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                        <p>Пароль</p>
                        <input
                            type='password'
                            placeholder={'Введите пароль'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}/>
                        <button onClick={click} >{isLogin ? 'Войти' : 'Регистрация'}</button>
                    </form>
                </div>
                <p>{isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}</p>
                {!isLogin ? <a href={LOGIN_ROUTE}>Войти</a> : <a href={REGISTRATION_ROUTE}>Регистрация</a>}
            </div>
        </Layout>

    );

})

export default Auth;