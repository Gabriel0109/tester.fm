// Hooks
import { useEffect, useRef } from 'react'
import { useSession } from "../../../hooks/useSession.tsx";
// GSAP
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

export function Box3({ children }) {
    const { topTrack } = useSession()
    const boxRef3 = useRef()
    const boxTween3 = useRef(null)
    useEffect(() => {
        boxTween3.current = gsap.to(boxRef3.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
    
    }, [])
    function handleEnter3() {
        boxTween3.current.play()
    }
    function handleLeave3() {
        boxTween3.current.reverse()
    }
    return (
        <div className="div3 content" ref={boxRef3} onMouseEnter={handleEnter3} onMouseLeave={handleLeave3}>
            {children}
            {!topTrack.items ? <h1>teste</h1>:
            <h1>{topTrack.items[0].name}</h1>
            }
        </div>
    )
}
