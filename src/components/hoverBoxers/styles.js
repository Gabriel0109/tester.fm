import styled from "styled-components";

export const BoxesWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    div{
        border-radius: 1rem;
        transition: scale 0.5s;
        padding: 2rem;
         font-size: 1.8rem;
        font-weight: bold;
    
    }


    .div1 { 
        grid-area: 1 / 1 / 3 / 3; 
        background-color:#7de2d1;
        color: #131515; 
        position: relative;
        overflow: hidden;
        .text-flow{
            position: absolute;
            top: 50%;
        }
    }
    .div2 { 
        grid-area: 1 / 3 / 2 / 4; 
        background-color:#339989;
        color: #131515; 
        min-height: 5rem;
        display: flex;
        align-items: flex-end;

    }
    .div3 {
         grid-area: 1 / 4 / 2 / 5;
         background-color:#2b2c28;
         color: var(--text-color);
         min-height: 5rem;
         display: flex;
         align-items: flex-end;
    
        }
      
    .div4 { 
        grid-area: 2 / 3 / 3 / 5;
        background-color:#fffafb;
         color: #131515; 
         min-height: 5rem;
         display: flex;
         align-items: flex-end;
   
         }
`