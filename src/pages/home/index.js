import { useState } from "react";
import Header from "../../components/header/Header";
import Alert from "../../components/Alert";
import Home from "../../components/showcase/Home";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Services from "../../components/services/Services";
import Qualification from "../../components/qualification/Qualification";
import Work from "../../components/Portfolio/Work";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import ScrollUp from "../../components/scrollup/ScrollUp";

const PortfolioHomePage = () => {
    const [alertState, setAlertState] = useState({ status: false, message: "Test", isClosed: true, error: false, warning: false, });

    return (
        <>
            <Header />
            {alertState.status && (<Alert setAlertState={setAlertState} {...alertState} />)}
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Work />
                <Contact setAlertState={setAlertState} alertState={alertState} />
            </main>

            <Footer />
            <ScrollUp />
        </>
    )
}

export default PortfolioHomePage