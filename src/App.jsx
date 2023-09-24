import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import Hire from "./pages/Hire.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/jobs"} element={<Jobs/>}/>
                    <Route path={"/hire"} element={<Hire/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App
