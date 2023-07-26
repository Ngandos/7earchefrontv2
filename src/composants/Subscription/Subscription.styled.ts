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

const FormContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  label p {
    text-align: start;
  }
`;

export { SubscribForm, FormContainer };

