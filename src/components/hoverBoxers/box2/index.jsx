import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {  useEffect, useRef } from 'react'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

export function Box2({children}){
    const boxRef2 = useRef()
    const boxTween2 = useRef(null)
    useEffect(() =>{
        boxTween2.current = gsap.to(boxRef2.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
        gsap.to(".div2", { x: -200, ease: 'linear', opacity: 0, scrollTrigger: {
            trigger: ".div2",
            toggleActions: "play none reverse none",
            start: " top+=280 center",
            scrub: true,
        }})
    }, [])
    function handleEnter2() {
        boxTween2.current.play()
    }
    function handleLeave2() {
        boxTween2.current.reverse()
    }
    return(
        <div className="div2" ref={boxRef2} onMouseEnter={handleEnter2} onMouseLeave={handleLeave2}>
        {children}
    </div>
    )
}
