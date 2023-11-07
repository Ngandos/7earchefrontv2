import { styled } from 'styled-components';

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

  @media all and (min-width: 320px) and (max-width: 670px) {
    width: 95%;
  }
`;

const SearchbarContainerInput = styled.div<{
  hasValidSearch: string | boolean;
  filteredArticles: boolean;
  filteredAuteurs: boolean;
  filteredCategories: boolean;
  filteredEditeurs: boolean;
  shouldBeOpen: boolean;
}>`
  z-index: 3;
  position: relative;
  width: 100%;
  height: 5rem;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.white_primary_base};
  border: 1px solid ${(props) => props.theme.colors.darkBlue};
  border-radius: 2.5rem;

  @media (min-width: ${(props) => props.theme.sizes.TABLET}px) {
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.sizes.LAPTOP}px) {
    border-top: 1px solid darck-blue;
    border-left: 1px solid darck-blue;
    border-right: 1px solid darck-blue;
    border-bottom: ${(props) =>
      props.shouldBeOpen && props.hasValidSearch && props.filteredArticles
        ? `none`
        : `1px solid darck-blue`};
    border-radius: ${(props) =>
      props.shouldBeOpen && props.hasValidSearch && props.filteredArticles
        ? `2.5rem 2.5rem 0 0`
        : '2.5rem'};
  }

  .input-wrapper {
    display: flex;

    img {
      margin-right: 8px;
    }
    padding: 0 1rem 0 2rem;
    @media (min-width: ${(props) => props.theme.sizes.TABLET}px) {
      padding: 0 0.5rem 0 2rem;
    }
    @media (min-width: ${(props) => props.theme.sizes.LAPTOP}px) {
      padding: 0 2rem 0 2rem;
      img {
        margin-right: -0.5rem;
      }
    }
  }

  .searchbar-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    all: unset;
    width: 100%;
    font-weight: 400;
    line-height: 2rem;
    text-align: left;
    color: darck-blue;
    font-family: 'Outfit';
    font-style: normal;
    height: 4.75rem;

    &::placeholder {
      color: blue;
      opacity: 1;
      font-size: 12px;
      @media (min-width: ${(props) => props.theme.sizes.TABLET}px) {
        font-size: 14px;
      }
    }
    &::-ms-input-placeholder {
      color: blue;
    }
    &::-ms-input-placeholder {
      color: blue;
    }
  }

  input[list]::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  input[list]::-webkit-list-button {
    display: none !important;
  }

  input::-webkit-search-cancel-button {
    display: none !important;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    width: 3rem;
    cursor: pointer;

    img {
      width: 3rem;
      height: 100%;
      padding: 0;
    }
  }

  .options-wrapper {
    .separator {
      display: none;
    }
    @media (min-width: ${(props) => props.theme.sizes.LAPTOP}px) {
      .separator {
        display: block;
        height: 1px;
        background-color: darck-blue;
        width: inherit;
        margin-left: 2rem;
        margin-right: 2rem;
      }
    }
  }

  .options {
    position: relative;
    border: 1px solid darck-blue;
    background: white;
    padding: 0 2rem 3.31rem 2rem;
    margin: 1.25rem -1px 6rem -1px;
    border-radius: 2.5rem;
    max-height: 50vh;
    overflow-y: scroll;

    @media (min-width: ${(props) => props.theme.sizes.LAPTOP}px) {
      border: 1px solid darck-blue;
      border-top: none;
      border-bottom: 1px solid darck-blue;
      border-left: 1px solid darck-blue;
      border-right: 1px solid darck-blue;
      border-radius: 0 0 2.5rem 2.5rem;
      margin: 0 -1px 6rem -1px;
    }

    .title {
      font-size: 1.75rem;
      line-height: 2.25rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: 3rem;
      margin-bottom: 2rem;
    }

    .option {
      color: darck-blue;
      font-weight: 400;
      font-size: 1.75rem;
      line-height: 2.25rem;
      list-style-type: none;
      border-bottom: solid 1px lightgrey;
      margin-top: 2.313rem;
      padding-bottom: 1.313rem;

      &.first {
        margin-top: 0;
      }

      &.last {
        border-bottom: none;
        padding-bottom: 0;
      }

      @media (min-width: ${(props) => props.theme.sizes.LAPTOP}px) {
        list-style-type: initial;
        border-bottom: none;
        margin-left: 2.5rem;
        margin-top: 2rem;
        padding-bottom: 0;
      }
    }

    .option a {
      text-decoration: none;
      color: darck-blue;
      &:hover {
        text-decoration: underline;
        font-weight: 600;
      }
    }

    /* scrollbar styles - works on Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgba(14, 35, 86, 0.2) rgba(0, 0, 0, 0.02);
    scroll-behavior: smooth;
    /* scrollbar styles - works on Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
      width: 1rem;
      cursor: pointer;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 2.5rem;
      margin-bottom: 1rem;
      cursor: pointer;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(14, 35, 86, 0.2);
      border-radius: 2.5rem;
      cursor: pointer;
    }
  }
`;

const SearchbarLabel = styled.div`
  margin-bottom: 8px;
  align-self: flex-start;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem;
  color: darkBlue;

  @media (min-width: ${(props) => props.theme.sizes.LAPTOP}px) {
    width: 284px;
  }
`;

export { Searchbar, SearchbarContainerInput, SearchbarLabel };

