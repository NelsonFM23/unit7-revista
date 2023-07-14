import React, {useState} from "react";
import * as S from "./Navbar.styles";

const NavBar = () => {
    const [showMenuBurguer, setShowMenuBurguer] = useState(false);
    const clickItemNav = (item) =>{
        console.log(item);
        document.getElementById(item).scrollIntoView({behavior:"smooth"});

    };
    return(
        <S.ContainerNavBar>
            <S.ContainerLogo>
                <S.ImageLogo src="/img/Logo.jpeg" alt="Logo Ivan"/>
                <div>
                    <h1>EDITORIAL NFMC</h1>
                    <h2>PUBLICACION DIGITAL</h2>
                </div>
            </S.ContainerLogo>
            <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
                <S.BurguerMenu />
                <S.BurguerMenu />
                <S.BurguerMenu />   
            </S.ContainerBurguer>

            <S.ContainerItems showMenuBurguer={showMenuBurguer}>
                <p onClick={() => clickItemNav("about-me")}>About us</p>
                <p onClick={() => clickItemNav("projects")}>Publicaciones</p>
                <S.Button onClick={() => clickItemNav("contact")}> 🤙 Contact us</S.Button>
            </S.ContainerItems>


        </S.ContainerNavBar>
    );
};

export default NavBar;