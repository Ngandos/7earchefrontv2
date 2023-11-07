import styled from "styled-components";

const Categorie = styled.section`

    display: flex;
    flex-direction: row;

    .catName {
        width: 100%;
        color: white;
        display: flex;
        justify-content: center;
        font-size: x-large;
    }

    .rotation3d {
        width: 285px;
        background: #eaeaed;
        float: center;
        margin: auto;
    }

    .rotation3d > img{
        width: 100%;
    }

    .box_box_2 {
        width: 100%;
        background: #e4087e;
        height: 100%;
        line-height: 120px;
        text-align: center;
        width: 100%;
        color: #fff;
        font-weight: 700;
    }

    .run-rotation {
        width: 285px;
        height: 285px;
        cursor: pointer;
        transform-style: preserve-3d;
    }

    .run-rotation:hover {
        animation: run-rotation 5s linear infinite;
    }

    @keyframes run-rotation {
        0% {
            transform: rotateY(0deg);
            }
        50% {
            transform: rotateY(180deg);
        }    

        75% {
            transform :rotateY(360deg);
        }

        100% {
            transform: rotateY(0deg);
            }
        }

    .box-2 {
        transform: perspective(200px) rotateXY(360deg);
            }

    img{
        width: 100%;
        height: 100%;
    }
`;

export default Categorie;