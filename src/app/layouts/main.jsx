import React, { useState } from "react";
import Header from "../components/common/header/header";
import ListTechnologies from "../components/ui/listTech/listTechnologies";
import ContactsForm from "../components/ui/contactsForm/contactsForm";
import Promo from "../components/ui/promo/promo";
import PromoQuote from "../components/ui/promo/promoQuote";
import Projects from "../components/ui/projects/projects";
import Hero from "../components/ui/hero/hero";
import Contacts from "../components/ui/contacts/contacts";
import NavBarMenu from "../components/ui/navBar/navBarMenu";

const Main = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(prevState => !prevState);
    };
    const menuClose = (e) => {
        setIsActive(false);
    };
    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", position: "relative" }}>
            {isActive ? <NavBarMenu color="white"/> : ""}
            <Header color="white" isActive={isActive} onHandleClick={toggleMenu}/>
            <Hero onHandleClick={menuClose}/>
            <ListTechnologies/>
            <Projects/>
            <PromoQuote/>
            <ContactsForm/>
            <Promo/>
            <Contacts/>
        </div>
    );
};

export default Main;
