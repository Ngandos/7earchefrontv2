import { styled } from 'styled-components';

const UserProfil = styled.section``;

const ProfilCard = styled.div`
  width: 90%;
  height: 200px;
  margin: auto;
  margin-top: 5%;
  padding: 24px;
  background-color: burlywood;
  border: black solid 1px;
  border-radius: 0.5rem;
  .ProPict {
    width: 10%;
    height: 60%;
    border: black solid 1px;
  }
  .details {
    width: 15%;
    text-align: left;
    border: black solid 1px;
  }
`;

export { UserProfil, ProfilCard };

