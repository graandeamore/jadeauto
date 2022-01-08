//pagination logic
import React, {useContext, useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {JADE_ROUTE, LOGIN_ROUTE} from '../utils/consts'
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context) //get context from index.js
    console.log(user.isAuth)

    return (
         <Routes>                                                                   {/*Routes.tag = IF NONE OF PATHS NOT WORKED -> WILL WORK THE LAST SET*/}
            {user.isAuth && authRoutes.map(({path, Component}) =>                  //if authorized generate auth-Routes
            <Route key={path} path={path} element={<Component/>} exact/>            //exact key means that path needs to be strict same
            )}

            {publicRoutes.map(({path, Component}) =>                          //if non-authorized generate public-Routes
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
             <Route path="*" element={<Navigate to={JADE_ROUTE} />}/>               {/*home redirection from unpredictable url */}
        </Routes>
    );
});

export default AppRouter;