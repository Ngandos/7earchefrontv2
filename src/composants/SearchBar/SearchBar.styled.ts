import { styled } from "styled-components";

const Searchbar = styled.div`
    width: 70%;
    height: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
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
    
    @media all and (min-width: 320px) and (max-width: 670px){
        width: 95%;
    }
`;

const SearchbarContainerInput = styled.div`
    height: 50%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem 2rem 1rem 2rem;
    background: white; 
    border: 1px solid blue;
    border-radius: 100px;

    img {
        width: 10%;
    }
    
    @media (min-width: 320) {
        width: 25%
    }

	.searchbar_input {
		all: unset;
		width: 100%;
		font-style: normal;
		font-weight: 200;
		line-height: 2rem;
		color: darck-blue;
		font-family: 'Outfit';
		font-style: normal;
		font-size: ;

		::placeholder {
            color: blue;
			opacity: 1;
		}
		::-ms-input-placeholder {
			color: blue;
		}
		::-ms-input-placeholder {
			color: blue;
		}
	}

	.searchbar_input[list]::-webkit-calendar-picker-indicator {
		display: none !important;
	}

	.searchbar_input[list]::-webkit-list-button {
		display: none !important;
	}
`;

// const Searchbar = styled.div`
//     padding: 1rem 0rem 3rem 0rem
// `;

const SearchbarLabel = styled.div`
    padding: 1rem 2rem 1rem 0rem;
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: ;
    line-height: 2.25rem;
    color: darck-blue;
`;

export {Searchbar, SearchbarContainerInput, SearchbarLabel};