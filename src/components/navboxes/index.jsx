 import {BoxesWrapper} from './styles.js'
 
 
 export function Navboxes(){
      return(<BoxesWrapper>
            <div className="div1">
                <h1>1</h1>
              <div className="spotify-logo">
                  <a href="">
                      <FaSpotify />
                      <p>Open in Spotify</p>
                  </a>
              </div>
            </div>
            <div className="div2">
                2
            </div>
            <div className="div3">
                3
            </div>
            <div className="div4">
                4
            </div>
          </BoxesWrapper>
      )
  }