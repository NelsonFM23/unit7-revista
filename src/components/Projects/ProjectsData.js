import videojuegos from "../../images/techs/videojuegos.png";
import construccion from "../../images/techs/construccion.png";
import gamer from "../../images/techs/gamer.png";
import arquitectura from "../../images/techs/arquitectura.png";
import automovilismo from "../../images/techs/automovilismo.png";
import aviacion from "../../images/techs/aviacion.png";
import aeroespacial from "../../images/techs/aeroespacial.png";
import hardware from "../../images/techs/hardware.png";
import defensa from "../../images/techs/defensa.png";
import vivienda from "../../images/techs/vivienda.png"
import mobiliario from "../../images/techs/mobiliario.png"
import aeronautica from "../../images/projects/aeronautica.jpeg";
import architecture from "../../images/projects/architecture.jpeg";
import computerworld from "../../images/projects/computerworld.jpeg";
import axxis from "../../images/projects/axxis.jpeg";
import thedrive from "../../images/projects/thedrive.jpeg";
import motor from "../../images/projects/motor.jpeg";

export const projectsPortfolio = [
    {
        title: "THE DRIVE",
        image: thedrive,
        techs: [
            {name:"AUTOMOVILISMO", src:automovilismo},
            {name:"DEFENSA",   src:defensa  },
        ],
        description: "REVISTA AMERICANA DE AUTOS  Y TECNOLOGIA MILITAR.",        
        website:" https://www.thedrive.com/"
    },
    {
        title: "MOTOR",
        image: motor,
        techs: [
            {name:"AUTOMOVILISMO", src:automovilismo},
            {name:"AVIACION",   src:aviacion },
        ],
        description: "REVISTA COLOMBIANA DE AUTOS Y  DE AVIACION CIVIL Y MILITAR.",       
        website:"https://www.motor.com.co/"
    },
    {
        title: "AERONAUTICA",
        image: aeronautica,
        techs: [
            {name:"AVIACION", src:aviacion},
            {name:"AEROESPACIAL",   src:aeroespacial  },
        ],
        description: "REVISTA COLOMBIANA DE DEFENSA AEREA Y AEROESPACIAL.",        
        website:"https://www.revistaaeronautica.mil.co/"
    },
    {
        title: "AXXIS",
        image: axxis,
        techs: [
            {name:"VIVIENDA", src:vivienda},
            {name:"MOBILIARIO",   src:mobiliario  },          
        ],
        description: "REVISTA COLOMBIANA DE DISEÑO DE INTERIORES Y VIVIENDA .",        
        website:"https://revistaaxxis.com.co/"
    },
    {
        title: "ARQ & DESIGN",
        image: architecture,
        techs: [
            {name:"ARQUITECTURA", src:arquitectura},
            {name:"CONSTRUCCION",   src:construccion  },
        ],
        description: "REVISTA AMERICANA DE ARQUITECTURA E INGENIERIA CIVIL.",        
        website:"https://www.architectureanddesign.com.au/home"
    },
    {
        title: "COMPUTER",
        image: computerworld,
        techs: [
            {name:"HARDWARE", src:hardware},
            {name:"VIDEOJUEGOS",   src:videojuegos  },
            {name:"GAMERS",   src:gamer  },
        ],
        description: "REVISTA AMERICANA DE COMPUTACION VIDEOJUEGOS .",        
        website:"https://www.computerworld.com/"
    },
    
];