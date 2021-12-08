import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter> {/* for pagination working App needs to be wrapped in BrowserRouter tag */}
            <NavBar/>
     <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
