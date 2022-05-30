import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { BoxesWrapper } from './styles.js'

export function HoverBoxes() {
    const boxRef1 = useRef()
    const boxTween1 = useRef(null)
    const boxRef2 = useRef()
    const boxTween2 = useRef(null)
    const boxRef3 = useRef()
    const boxTween3 = useRef(null)
    const boxRef4 = useRef()
    const boxTween4 = useRef(null)
    useEffect(() => {
        boxTween1.current = gsap.to(boxRef1.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
        boxTween2.current = gsap.to(boxRef2.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
        boxTween3.current = gsap.to(boxRef3.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
        boxTween4.current = gsap.to(boxRef4.current, { scale: .985, paused: true, borderRadius: '2.5rem' });
    }, [])
    function handleEnter1() {
        boxTween1.current.play()
    }
    function handleLeave1() {
        boxTween1.current.reverse()
    }
    function handleEnter2() {
        boxTween2.current.play()
    }
    function handleLeave2() {
        boxTween2.current.reverse()
    }
    function handleEnter3() {
        boxTween3.current.play()
    }
    function handleLeave3() {
        boxTween3.current.reverse()
    }
    function handleEnter4() {
        boxTween4.current.play()
    }
    function handleLeave4() {
        boxTween4.current.reverse()
    }
    return (
        <BoxesWrapper>
            <div className="div1" ref={boxRef1} onMouseEnter={handleEnter1} onMouseLeave={handleLeave1}>
                1
                <div className="text-flow">
                    teste teste teste
                </div>
            </div>
            <div className="div2" ref={boxRef2} onMouseEnter={handleEnter2} onMouseLeave={handleLeave2}>
                2
            </div>
            <div className="div3" ref={boxRef3} onMouseEnter={handleEnter3} onMouseLeave={handleLeave3}>
                3
            </div>
            <div className="div4" ref={boxRef4} onMouseEnter={handleEnter4} onMouseLeave={handleLeave4}>
                4
            </div>

        </BoxesWrapper>
    )

}