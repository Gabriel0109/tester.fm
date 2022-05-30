import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

export function Box4({ children }) {
    const boxRef4 = useRef()
    const boxTween4 = useRef(null)
    useEffect(() => {
        boxTween4.current = gsap.to(boxRef4.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
        gsap.to(".div4", {
            x: 400, ease: 'linear', opacity: 0, scrollTrigger: {
                trigger: ".div1",
                toggleActions: "play none reverse none",
                start: " top+=280 center",
                scrub: true,
            }
        })
    }, [])
    function handleEnter4() {
        boxTween4.current.play()
    }
    function handleLeave4() {
        boxTween4.current.reverse()
    }
    return (
        <div className="div4" ref={boxRef4} onMouseEnter={handleEnter4} onMouseLeave={handleLeave4}>
            {children}
        </div>
    )
}
