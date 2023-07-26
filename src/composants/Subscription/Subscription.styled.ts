import { styled } from 'styled-components';

const SubscribForm = styled.section`
  width: 50%;
  margin: auto;
  padding: 24px;
  border: black solid 2px;
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

