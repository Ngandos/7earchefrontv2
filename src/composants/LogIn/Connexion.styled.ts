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
    label {
        width: 50%;
        margin: auto;
    }
    input {
        width: 50%;
        margin: auto;
    }
    
`;

export default ConnectForm;