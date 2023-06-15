import { styled } from "styled-components";

const Searchbar = styled.div`
    width: 50%;
    margin: auto;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .search {
        width: 50%;
        margin-left: 5px;
    }

`;

const SearchbarContainerInput = styled.div``;

const SearchbarLabel = styled.div``;

export { Searchbar, SearchbarContainerInput, SearchbarLabel };