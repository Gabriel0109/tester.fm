import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

export function Box3({ children }) {
    const boxRef3 = useRef()
    const boxTween3 = useRef(null)
    useEffect(() => {
        boxTween3.current = gsap.to(boxRef3.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
        gsap.to(".div3", {
            x: 300, ease: 'linear', opacity: 0, scrollTrigger: {
                trigger: ".div1",
                toggleActions: "play none reverse none",
                start: " top+=280 center",
                scrub: true,
            }
        })
    }, [])
    function handleEnter3() {
        boxTween3.current.play()
    }
    function handleLeave3() {
        boxTween3.current.reverse()
    }
    return (
        <div className="div3" ref={boxRef3} onMouseEnter={handleEnter3} onMouseLeave={handleLeave3}>
            {children}
        </div>
    )
}
