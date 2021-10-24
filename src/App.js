import { BrowserRouter } from 'react-router-dom'

import Navbar from "./components/NavBar";
import AppRouter from "./components/AppRouter";

import './App.css'
import {useContext} from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

export default function App() {

    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if(loading){
        return <Loader/>
    }

    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
}
