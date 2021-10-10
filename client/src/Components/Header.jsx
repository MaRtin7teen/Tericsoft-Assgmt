import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faCrosshairs, faHorse, faRunning, faSailboat, faStar, faSwimmer, faWeight } from "@fortawesome/free-solid-svg-icons";


const Container = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    padding: 1% 10%;

    & > .iconContainer {
        border-radius: 50%;
        background-color: #292929;
        text-align: center;
        width: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2.5% 1%;
        margin: 1%;
        cursor: pointer;
        text-decoration: none;
        transition: 0.5s;

        & > .icon {
            font-size: 1.5em;
            color: gray;
        }

        & > .iconText {
            color: #b8b8b8;
            font-size: 0.9em;
        }
        
        :hover {
            filter: contrast(70%);
        }
    }
`;

const Header = () => {
    const icons = [ 
        {
            icon: faStar,
            iconText: "Featured",
            to: "/featured"
        },
        {
            icon: faCrosshairs,
            iconText: "Armoury",
            to: "/armoury"
        },
        {
            icon: faSwimmer,
            iconText: "Aquatics",
            to: "/aquatics"
        },
        {
            icon: faBiking,
            iconText: "Cycling",
            to: "/cycling"
        },
        {
            icon: faHorse,
            iconText: "Equestrian",
            to: "/equestrian"
        },
        {
            icon: faWeight,
            iconText: "Extreme",
            to: "/extreme"
        },
        {
            icon: faSailboat,
            iconText: "Golf",
            to: "/golf"
        },
        {
            icon: faRunning,
            iconText: "Gymnastics",
            to: "/gymnastics"
        },
        {
            icon: faSailboat,
            iconText: "Lake & sea",
            to: "/lake-sea"
        }
    ];

    return (
        <Container>
            {
                icons.map(( { icon, iconText,to } ) => (
                    <Link className="iconContainer" to={to} key={to}>
                        <FontAwesomeIcon icon={icon} className='icon' />
                        <div className="iconText">{iconText}</div>
                    </Link>
                ) )
            }
        </Container>
    )
}

export default Header;