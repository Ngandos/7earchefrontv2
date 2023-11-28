import { styled } from "styled-components";

const Searchbar = styled.div`
    width: 45%;
    height: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .search {
        width: 100%;
        height: 30px;
        padding: 10px;
        color: black;
        background-color: white;
        border-radius: 1rem;
    }

    .searchLab {
        padding: 10px;
        display: flex;
        align-items: flex-start;
    }
    
    .searchOptions {
        background-color: white;
    }

    @media all and (min-width: 320px) and (max-width: 670px){
        width: 95%;
    }
`;

export default Searchbar;