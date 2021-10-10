import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    padding: 3%;
    background-color: black;
    color: white;
    
    & > .cardsCont {
        display: flex;
        justify-content: start;

        & > .card {
            text-align: center;
            margin: 1% 1% 1% 0;
            padding: 1%;
            background-color: #adadad;
            border-radius: 5px;

            & > img {
                margin: 1%;
            }

            :hover {
                transition: 0.5s;
                transform: scale(1.1);
            }
        }
    }
`;

const Cards = () => {
    const cardInfo = [
        {
            src: "https://via.placeholder.com/200x400",
            name: "Image1"
        },
        {
            src: "https://via.placeholder.com/200x400",
            name: "Image2"
        },
        {
            src: "https://via.placeholder.com/200x400",
            name: "Image3"
        }
    ];

    return (
        <Container>
            <h3>Highlights</h3>
            
            <div className="cardsCont">
                {
                    cardInfo.map(ele => (
                        <div className="card">
                            <img src={ele.src} alt={ele.name} />
                            <p>{ele.name}</p>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

export default Cards;