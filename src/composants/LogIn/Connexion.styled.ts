import { styled } from "styled-components";


const ConnectForm = styled.form`
    width: 30%;
    height: 30%;
    margin: 5% auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    background-color: burlywood;
    border-radius: 0.5rem;
    border: black solid 1px;
    color: black;

    label {
        width: 70%;
        margin: auto;
        margin-bottom: 5%;
        text-align: start;
        font-weight: bold;
    }

    input {
        width: 70%;
        margin: auto;
        color: black;
    }

    .connect {
        width: 30%;
        margin: auto;
        margin-top: 2%;
    
        @media all and (min-width: 320px) and (max-width: 670px){
            width: 50%;
        }
    }
    
`;

export default ConnectForm;