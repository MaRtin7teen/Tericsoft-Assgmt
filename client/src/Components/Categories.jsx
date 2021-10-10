import React from 'react';
import styled from "styled-components";
import { Link, Redirect, useParams } from "react-router-dom";

const Container = styled.div`
    background-color: #202020;
    padding: 2%;
    margin: 1% 0;

    & > .typeContainer {
        display: flex;
        justify-content: center;
        align-items: center;

        & > .type {
            color: #9e9e9e;
            text-decoration: none;
            margin: 0 2%;
            font-size: 1.1em;
            font-weight: 600;

            :hover {
                color: #e4e4e4;
            }
        }
    }
`;

const Categories = () => {

    const params = useParams();
    const selectedCat = params.category;
    let type;

    const category = [
        {
            name: "featured",
            types: ["Featured1", "Featured2"]
        },
        {
            name: "armoury",
            types: ["Armoury1", "Armoury2"]
        },
        {
            name: "aquatics",
            types: ["Aquatics1", "Aquatics2"]
        },
        {
            name: "cycling",
            types: ["Cycling1", "Cycling2"]
        },
        {
            name: "equestrian",
            types: ["Equestrian1", "Equestrian2"]
        },
        {
            name: "extreme",
            types: ["Extreme1", "Extreme2"]
        },
        {
            name: "golf",
            types: ["Golf1", "Golf2"]
        },
        {
            name: "gymnastics",
            types: ["Gymnastics1", "Gymnastics2"]
        },
        {
            name: "lake-sea",
            types: ["Lake & Sea1", "Lake & Sea2"]
        }
    ];

    for (let i in category) {
        if (category[i].name === selectedCat) {
            type = category[i].types;
            break;
        }
    }

    if (type === undefined || type.length === 0) {
        return <Redirect push to="/" />
    }

    return (
        <Container>
            <div className="typeContainer">
                {
                    type?.map(ele => (
                        <Link className="type" to={`/${selectedCat}/${ele}`}>
                            {ele}
                        </Link>
                    ))
                }
            </div>
        </Container>
    )
}

export default Categories;