import React, {useContext} from 'react';
import {Context} from "../index";
import classes from "../scss/NavBar.module.scss";
import logo from '../img/100px.png'
import {observer} from "mobx-react-lite"; //needs to be optimized
import Layout from "../utils/Layout";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, JADE_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const NavBar = observer(() => {
        const {user} = useContext(Context)     //needed just in components that rendered different depended on authorization
        const navigate = useNavigate()
        return (
            <Layout>
                    <div className={classes.NavBar}>
                        <div className={classes['NavBar__logo']} onClick={() => navigate(JADE_ROUTE)}>
                            <img src={logo} alt=""/>
                            <p>Jade Auto</p>
                        </div>

                        <div className={classes['NavBar__nav']}>
                            <div className={classes['NavBar__nav-phone']}>
                                <p>ТЕЛЕФОН:</p>
                                <a href="tel:+79089999929"> +7 (908) 999-99-29</a>
                            </div>
                            <div className={classes['NavBar__nav-spacer']}></div>
                            {user.isAuth ?
                                <div className={classes['NavBar__nav-log']}>
                                    <p>Имя</p>
                                    <p>Выход</p>
                                </div>
                                :
                                <div className={classes['NavBar__nav-log']}>
                                    <p onClick={() => navigate(ADMIN_ROUTE)}>Admin</p>
                                    <p onClick={() => navigate(REGISTRATION_ROUTE)}>Вход и регистрация</p>
                                </div>
                            }
                        </div>
                    </div>
            </Layout>
        );
    }
)

export default NavBar;