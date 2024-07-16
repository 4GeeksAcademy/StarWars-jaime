import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext.js";

//import custom component
import ScrollToTop from "./component/ScrollToTop.jsx";
import { BackendURL } from "./component/BackendURL.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";

// import custom pages
import { Home } from "./pages/Home.jsx";
import { Error404 } from "./pages/Error404.jsx";
import { Jumbotron } from "./component/Jumbotron.jsx";
import { User } from "./pages/User.jsx";
import { Alert } from "./component/Alert.jsx";
import { ContacList } from "./pages/ContactList.jsx";
import { ContactDetails } from "./pages/ContactDetails.jsx";
import { Characters } from "./pages/Characters.jsx";
import { Character } from "./pages/Character.jsx";
import { Planets } from "./pages/Planets.jsx";


//Create your first component
const Layout = () => {
    //The basename is used when your project is published in a subdirectory and not in the root of the domain
    //You can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";


    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div className="d-flex flex-column min-vh-100">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    {/* <Alert /> */}
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Jumbotron/>} path="/component/Jumbotron"/>
                        <Route element={<User/>} path="/pages/User" />
                        <Route element={<ContacList/>} path="/pages/ContactList" />
                        <Route element={<ContactDetails/>} path="/pages/ContactDetails" />
                        <Route element={<Error404/>} path="/pages/Error404" />
                        <Route element={<Characters/>} path="/pages/Characters" />
                        <Route element={<Character/>} path="/pages/Character" />
                        <Route element={<Planets/>} path="/pages/Planets" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
