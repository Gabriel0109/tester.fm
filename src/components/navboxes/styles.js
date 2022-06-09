import styled from "styled-components";

export const BoxesWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    .content{
        border-radius: 1rem;
        transition: scale 0.5s;
        padding: 2rem;
        font-weight: bold;
    }

/*=============*/
    .div1 { 
        grid-area: 1 / 1 / 3 / 3; 
        background-color:#7de2d1;
        color: #131515; 
        border-radius: 1rem;
        position: relative;
        overflow: hidden;

        .linkToSong{
        position: absolute;
        font-size: .7rem;
        bottom: 2rem;
        right: 2rem;
      }
    }
/*=============*/
    .div2 { 
        grid-area: 1 / 3 / 2 / 4; 
        background-color:#339989;
        color: #131515; 
        border-radius: 1rem;
        .teste{
        position: relative;
        overflow: hidden;
        min-height: 7rem;
        display: flex;
        align-items: flex-end;
        }

        .text-flow{
            top: 0;
            width: 100%;
            right: 0;
            left: 0;
            display: flex;
            justify-content: flex-end;
            align-items:center;
            height: 100%;
            bottom: 0;
            position: absolute;
            font-size: 6rem;
            background-color: #339989
         
        }   
    }
/*=============*/
    .div3 {
         grid-area: 1 / 4 / 2 / 5;
         background-color:#2b2c28;
         color: var(--text-color);
         border-radius: 1rem;
         min-height: 7rem;
         display: flex;
         align-items: flex-end;
    
        }
/*=============*/
    .div4 { 
        grid-area: 2 / 3 / 3 / 5;
        background-color:#fffafb;
         color: #131515; 
         min-height: 7rem;
         display: flex;
         border-radius: 1rem;
         position: relative;

         align-items: flex-end;
     
   
         }
/*=============*/
`
export const AlbumWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;

   
`
export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: 1rem;
`
export const SongName = styled.h2`
    font-weight: bold;

    margin-bottom: 0;
`
export const ArtistName = styled.ul`
    font-size: .8rem;
    list-style: none;
    display: flex;
    padding-left: 0;
    li{
        padding-left: .2rem
    }
`
export const NoMusicWrap = styled.p`
`
export const RecentlyList = styled.ul`
`