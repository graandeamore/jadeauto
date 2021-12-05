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
                <div className={classes['container']}>
                    <div className={classes.NavBar}>
                        <div className={classes['NavBar__logo']}>
                            <img src={logo} alt=""/>
                            <span>Jade Auto</span>
                        </div>

                        <div className={classes['NavBar__nav']}>
                            <div className={classes['NavBar__nav-phone']}>
                                <span>ТЕЛЕФОН:</span>
                                <a href="tel:+79089999929"> +7 (908) 999-99-29</a>
                            </div>
                            <div className={classes['NavBar__nav-spacer']}></div>
                            {user.isAuth ?
                                <div className={classes['NavBar__nav-log']}>
                                    <span>Имя</span>
                                    <span>Выход</span>
                                </div>
                                :
                                <div className={classes['NavBar__nav-log']}>
                                    <span>Admin</span>
                                    <span onClick={() => user.setIsAuth(true)}>Вход и регистрация</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
)

export default NavBar;