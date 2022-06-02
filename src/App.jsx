import {Header} from '../src/components/Header/Header.jsx'
import {SessionProvider} from '../src/hooks/useSession.tsx'
import { HoverBoxes } from '../src/components/HoverBoxers/index.jsx';
import './globals.css';
function App() {

  return (
    <SessionProvider>
      <Header />
      <HoverBoxes />
    </SessionProvider>
  )
}

export default App
