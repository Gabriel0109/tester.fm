import './globals.css';
import {Header} from './components/Header/index.jsx'
import {SessionProvider} from './hooks/useSession.tsx'
import { HoverBoxes } from './components/HoverBoxers/index.jsx';
function App() {

  return (
    <SessionProvider>
      <Header />
      <HoverBoxes />
    </SessionProvider>
  )
}

export default App
