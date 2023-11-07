import { styled } from 'styled-components';

const SubscribForm = styled.section`
    width: 40%;
    margin: auto;
    margin-top: 5%;
    padding: 24px;
    border: black solid 1px;
    border-radius: 0.5rem;
    background-color: burlywood;
`;

const FormContainer = styled.form`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;

    .SubLabel {
        margin-bottom: 5%;
    }

    label p {
        text-align: start;
        font-weight: bold;
    }
    
    .Subutton {
        margin-top: 5%;
    }
`;

export { SubscribForm, FormContainer };

