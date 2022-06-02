import styled from 'styled-components'

export const Button = styled.button`
 
    height: 3rem;
    border-radius: 3rem;
    /* background: var(--gray - 850); */
    border: 0;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;

    svg {
        width: 20px;
        height: 20px;
    }

    svg:first-child {
        margin-right: 1rem;
    }

    svg.closeIcon {
        margin-left: 1rem;
    }

    transition: filter .2s ease -in -out;

    &:hover {
        filter: brightness(.8);
    }


`