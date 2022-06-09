// Hooks
import { useEffect, useRef } from 'react'
// import { useSession } from "../../../hooks/useSession.tsx";
// Styling
// import logo from '../../../public/imgs/nomusic.png'
// import {  NoMusicWrap, RecentlyList } from '../styles.js'
// GSAP
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);


export function Box2({ children }) {
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
        </div>
    )
}
