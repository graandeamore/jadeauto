import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Layout from './containers/Layout/Layout'
import Auth from "./pages/Auth";
function App() {
  return (
    <BrowserRouter> {/* for pagination working App needs to be wrapped in BrowserRouter tag */}
        <Layout>
            <NavBar/>
        </Layout>
     <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
