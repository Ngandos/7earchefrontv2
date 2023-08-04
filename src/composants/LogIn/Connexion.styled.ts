import { styled } from "styled-components";


const ConnectForm = styled.div`
    width: 50%;
    height: 25vh;
    margin: 5% auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    background-color: burlywood;
    border-radius: 0.5rem;
    border: black solid 1px;
    color: black;

    label {
        width: 50%;
        margin: auto;
        text-align: start;
    }

    input {
        width: 50%;
        margin: auto;
        color: black;
    }

    .connect {
        width: 50%;
        margin: auto;
    
        @media all and (min-width: 320px) and (max-width: 670px){
            width: 50%;
        }
    }
    
`;

export default ConnectForm;