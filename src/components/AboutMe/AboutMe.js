import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks =[
            {
                name:"Github",
                link:"https://github.com/NelsonFM23",
                logo:logoGithub,
            },
            {
                name:"Linkedind",
                link:"https://www.linkedin.com/in/francisco-moreno-3500bb243/",
                logo:logoLinkeind,
            },
            {
                name:"Youtube",
                link:"https://www.youtube.com/channel/UCOZu2LOLyXA5Sjqvr3M_GsQ",
                logo:logoYoutube,
            },
        ];

        return (
            <S.ContainerAboutMe id="about-me">
                <S.ContainerFlex>
                    <S.ContainerText>
                        <S.Title>
                            <p>👋🏼HOLA GEEKS </p>
                            <p>TECNOLOGIA & TECNICA</p>
                            <p>SITE DE MAGAZINES TECNOLOGICOS</p>
                        </S.Title>
                        <S.DescriptionText>
                        AQUI ENCONTRARAS LAS MEJORES REVISTAS DIGITALES
                        DE CIENCIA TECNICA Y TECNOLOGIA DE COLOMBIA Y EL
                        MUNDO 
                        </S.DescriptionText>
                        <S.ContainerIcons>
                        {socialNetworks.map((network, index)=>(
                            <a
                                key={index}
                                href={network.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={network.logo} alt={network.name}/>
                            </a>
                        ))}
                    </S.ContainerIcons>
                    </S.ContainerText>
                    <S.ContainerImage>
                        <img src="/img/editor.png" alt="Nelson Moreno - EDITOR"/>
                    </S.ContainerImage>
                </S.ContainerFlex>
            </S.ContainerAboutMe>
        );
};


export default AboutMe;