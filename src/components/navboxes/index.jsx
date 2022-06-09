import { BoxesWrapper, AlbumWrapper, SongName, ArtistName, InfoContent } from './styles.js'
import { Box1 } from './box1/index.jsx'
import { Box2 } from './box2/index.jsx'
import { Box3 } from './box3/index.jsx'
import { Box4 } from './box4/index.jsx'
import { FaSpotify } from 'react-icons/fa'
import { useEffect } from 'react'
import { useSession } from "../../hooks/useSession";
import logo from '../../public/imgs/nomusic.png'




export function Navboxes() {
    const { playingData, refresh } = useSession()

    useEffect(() => {

        if (playingData.item) {
            console.log('fora', playingData)
        }
    }, [playingData])

    return (<>
        <BoxesWrapper>
            <Box1>
                <div>



                </div>

            </Box1>
            <Box2 />

            <Box3>
                <h1>3</h1>
                <div className="text-flow">
                    teste teste teste
                </div>
            </Box3>
            <Box4>
                <div className="text-flow">
                    {!playingData.item ?
                        <AlbumWrapper>
                            <img src={logo} width="120" height="120" alt="Logo" />
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
                                <img src={playingData.item.album.images[0].url} width="120" height="120" alt="Logo" />
                                <InfoContent>
                                    <SongName>
                                        {playingData.item.name}
                                    </SongName>
                                    <ArtistName>
                                        {playingData.item.artists
                                            .map((item) => (
                                                <li>
                                                    <a href={item.external_urls.spotify} target="_blank">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))
                                            .reduce((prev, curr) => [prev, ', ', curr])
                                        }

                                    </ArtistName>
                                </InfoContent>
                                {/* <button onClick={refresh}>
                                teste
                            </button> */}
                            </AlbumWrapper>
                            <a className="linkToSong" href={playingData.item.external_urls.spotify} target="_blank">Open in Spotify</a>

                        </>
                    }
                </div>
            </Box4>

        </BoxesWrapper>

    </>

    )

}