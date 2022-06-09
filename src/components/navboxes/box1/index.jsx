// Hooks
import { useEffect, useRef } from 'react'
import { useSession } from "../../../hooks/useSession.tsx";
// Styling
import logo from '../../../public/imgs/nomusic.png'
import { AlbumWrapper, SongName, ArtistName, InfoContent } from '../styles.js'
// GSAP
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

export function Box1({ children }) {
    const { playingData } = useSession()

    const boxRef1 = useRef()
    const boxTween1 = useRef(null)
    useEffect(() => {
        boxTween1.current = gsap.to(boxRef1.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
    }, [])
    function handleEnter1() {
        boxTween1.current.play()
    }
    function handleLeave1() {
        boxTween1.current.reverse()
    }

    return (
        <div className="div1 content" ref={boxRef1} onMouseEnter={handleEnter1} onMouseLeave={handleLeave1}>
            {children}
            {!playingData.item ?
                <AlbumWrapper>
                    <img src={logo} width="220" height="220" alt="Logo" />
                    <InfoContent>
                        <SongName>sem musica</SongName>
                        <ArtistName>
                            sem artista
                        </ArtistName>
                    </InfoContent>
                </AlbumWrapper>
                :
                <>
                    <AlbumWrapper>
                        <img src={playingData.item.album.images[1].url} width="220" height="220" alt="Logo" />
                        <InfoContent>
                            <SongName>
                                <a href={playingData.item.external_urls.spotify} target="_blank">
                                    {playingData.item.name}
                                </a>

                            </SongName>
                            <ArtistName>
                                {playingData.item.artists
                                    .map((item) => (
                                        <li key={item.id}>
                                            <a href={item.external_urls.spotify} target="_blank">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))
                                    .reduce((prev, curr) => [prev, ', ', curr])
                                }
                            </ArtistName>
                        </InfoContent>
                    </AlbumWrapper>
                    <a className="linkToSong" href={playingData.item.external_urls.spotify} target="_blank">Open in Spotify</a>
                </>
            }
        </div>
    )
}
