import styled from 'styled-components'

export const Button = styled.button`
 
    height: 3rem;
    border-radius: 3rem;
    background:#2a2a2a;
    border: 0;
    padding: 0 1.5rem;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Trap';
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
export const LoginBtn = styled.a`
 
    height: 3rem;
    border-radius: 3rem;
    background:#2a2a2a;
    border: 0;
    padding: 0 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: .8rem;

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