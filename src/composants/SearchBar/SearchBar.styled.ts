import { styled } from "styled-components";

const Searchbar = styled.div`
    width: 74%;
    height: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .search {
        width: 100%;
        height: 40px;
        padding: 10px;
        color: black;
        background-color: white;
        border-radius: 1rem;
    }

    .searchLab {
        padding: 10px;
        display: flex;
        align-items: flex-start;
        margin-bottom: 1%;
        justify-content: center;

        .seaLabText {
            font-size: large;
            font-weight: bold;
        }
    }
    
    .searchOptions {
        background-color: white;
    }

    .SearchButt {
        width: 50%;
        margin-bottom: 1%;
    }

    @media all and (min-width: 320px) and (max-width: 670px){
        width: 95%;
    }
`;

export default Searchbar;