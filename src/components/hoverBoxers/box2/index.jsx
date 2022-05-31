import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {  useEffect, useRef } from 'react'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

export function Box2({children}){
    const boxRef2 = useRef()
    const textRef = useRef()
    const textTween = useRef(null)
    const boxTween2 = useRef(null)
    useEffect(() =>{
        let box = document.querySelector('.div2');
        let width = box.offsetWidth;
        // let height = box.offsetHeight;
        console.log(width)
        boxTween2.current = gsap.to(boxRef2.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
        textTween.current = gsap.fromTo(textRef.current, {opacity: 0, paused: true, x: -200}, {opacity: 1 , paused: true, x: 0} )
        gsap.to(".div2", { x: -200, ease: 'linear', opacity: 0, scrollTrigger: {
            trigger: ".div2",
            toggleActions: "play none reverse none",
            start: " top+=280 center",
            scrub: true,
        }})
    }, [])
    function handleEnter2() {
        boxTween2.current.play()
        textTween.current.play()
    }
    function handleLeave2() {
        boxTween2.current.reverse()
        textTween.current.reverse()

    }
    return(
        <div className="div2 content" ref={boxRef2} onMouseEnter={handleEnter2} onMouseLeave={handleLeave2}>
        {/* {children} */}
     <div className="teste">
            <h1>2</h1>
            <div>
            teste teste 
            </div>
            <div className="text-flow" ref={textRef}>
                        <a href="#2"> → </a>
            </div>
     </div >
    </div>
    )
}
