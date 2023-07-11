import styled from "styled-components";

const NavPages = styled.div `
    width: 100%;
    height: auto;
    margin: auto;
    .navlist {
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        @media all and (min-width: 320px) and (max-width: 670px){
            width: 100%;
            margin: auto;
            margin-bottom: 10%;
        }
    }
    .butt {
        width: 20%;
        @media all and (min-width: 320px) and (max-width: 670px){
            height: 55px;
            width: 35%;
            margin-bottom: 1%;
        }
    }
    @media all and (min-width: 320px) and (max-width: 670px){
        display: flex;
        padding: auto;
    }    
`;

export default NavPages;