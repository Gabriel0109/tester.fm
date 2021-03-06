// Hooks
import { useEffect, useRef } from 'react'
import { useSession } from "../../../hooks/useSession.tsx";
//styles
import {TopWrapper} from '../styles.js'
// GSAP
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);


export function Box2({ children }) {
    const {topArtist} = useSession()
    const boxRef2 = useRef()
    const boxTween2 = useRef(null)

    useEffect(() => {
        boxTween2.current = gsap.to(boxRef2.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
       
    }, [])
    function handleEnter2() {
        boxTween2.current.play()

    }
    function handleLeave2() {
        boxTween2.current.reverse()

    }
    return (
        <div className="div2 content" ref={boxRef2} onMouseEnter={handleEnter2} onMouseLeave={handleLeave2}>
            {children}
            {!topArtist.items ? <h1>teste</h1>:
            <TopWrapper>
                <img src={topArtist.items[0].images[1].url} alt="" />
                <h1>{topArtist.items[0].name}</h1>
            </TopWrapper>
            }
        </div>
    )
}
