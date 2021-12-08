import React, {useContext} from 'react';
import {Context} from "../index";
import classes from "../scss/NavBar.module.scss";
import logo from '../img/100px.png'
import {observer} from "mobx-react-lite"; //needs to be optimized
import Layout from "../utils/Layout";

const NavBar = observer(() => {
        const {user} = useContext(Context)     //needed just in components that rendered different depended on authorization
        return (
            <Layout>
                    <div className={classes.NavBar}>
                        <div className={classes['NavBar__logo']}>
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
                                    <p>Admin</p>
                                    <p onClick={() => user.setIsAuth(true)}>Вход и регистрация</p>
                                </div>
                            }
                        </div>
                    </div>
            </Layout>
        );
    }
)

export default NavBar;