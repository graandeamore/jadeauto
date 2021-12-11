import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {check} from "./http/userAPI";
import {useContext, useState,useEffect} from "react";
import {Context} from './index'
import gif from './e8nZC.gif'

const App = observer(() => {

    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        check().then( data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])


    if (loading){
        return <img src={gif} alt="s0" width="250px"/>
    }
    return (
        <BrowserRouter> {/* for pagination working App needs to be wrapped in BrowserRouter tag */}
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );

})

export default App;
