import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {  useEffect, useRef } from 'react'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

export function Box1({children}){
    const boxRef1 = useRef()
    const boxTween1 = useRef(null)
    useEffect(() =>{
        boxTween1.current = gsap.to(boxRef1.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
        gsap.to(".div1", { x: -400, ease: 'linear', opacity: 0, scrollTrigger: {
            trigger: ".div1",
            toggleActions: "play none reverse none",
            start: " top+=280 center",
            scrub: true,
        }})
    }, [])
    function handleEnter1() {
        boxTween1.current.play()
    }
    function handleLeave1() {
        boxTween1.current.reverse()
    }
    return(
        <div className="div1 content" ref={boxRef1} onMouseEnter={handleEnter1} onMouseLeave={handleLeave1}>
        {children}
    </div>
    )
}
