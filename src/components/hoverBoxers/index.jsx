import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BoxesWrapper } from './styles.js'
import { Box1 } from './box1/'
import { Box2 } from './box2/'
import { Box3 } from './box3/'
import { Box4 } from './box4/'
gsap.registerPlugin(ScrollTrigger);

export function HoverBoxes() {

    return (
        <BoxesWrapper>
            <Box1>
                1
                <div className="text-flow">
                    teste teste teste
                </div>
            </Box1>
            <Box2>
                2
                <div className="text-flow">
                    teste teste teste
                </div>
            </Box2>
            <Box3>
                3
                <div className="text-flow">
                    teste teste teste
                </div>
            </Box3>
        
           <Box4>
                    4
                    <div className="text-flow">
                    teste teste teste
                </div>
           </Box4>

        </BoxesWrapper>
    )

}