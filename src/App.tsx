
import { Home } from "../components/Home.tsx";
import { Contacts } from "../components/Contacts.tsx";
import { About } from "../components/About.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router";
import './App.css'
import Header from "../components/Header.tsx";
import Auth from "../components/Auth.tsx";
import {Account} from "../components/Account.tsx";
import {store} from "./redux/store.ts";
import {Provider} from "react-redux";

function App() {


    return (
        <>

        <Provider store={store}>
            <Router>
                <Header />
                <Routes>

                  <Route path="/" element={<Home/>} />
                    <Route path="/contacts" element={<Contacts/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/auth" element={<Auth/>} />
                    <Route path="/account" element={<Account/>} />

                </Routes>

            </Router>
        </Provider>


        </>
    )
}
export default App
