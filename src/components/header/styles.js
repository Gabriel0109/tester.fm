import styled from 'styled-components'

export const IntroWrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 1600px){
        min-height: 330px;
    }
    @media (min-width: 1400px){
        height: 40vh;
    }
    @media (min-width: 1024px){
        min-height: 280px;
        height: 40vh;
    }
    @media (min-width: 768px){
        height: 32vh;
    }
`