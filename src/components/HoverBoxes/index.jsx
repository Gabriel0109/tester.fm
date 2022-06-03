import { BoxesWrapper } from './styles'
import { Box1 } from './box1/index.jsx'
import { Box2 } from './box2/index.jsx'
import { Box3 } from './box3/index.jsx'
import { Box4 } from './box4/index.jsx'

export function HoverBoxes() {

    return (
        <BoxesWrapper>
            <Box1>
                <h1>1</h1>
                <div className="text-flow">
                    teste teste teste
                </div>
            </Box1>
            <Box2 />
               
              
           
            <Box3>
               <h1>3</h1>
                <div className="text-flow">
                    teste teste teste
                </div>
            </Box3>
        
           <Box4>
                    <h1>4</h1>
                    <div className="text-flow">
                    teste teste teste
                </div>
           </Box4>

        </BoxesWrapper>
    )

}