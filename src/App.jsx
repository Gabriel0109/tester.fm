import './globals.css';
import {Header} from './components/Header/index.jsx'
import {sessionProvider} from './hooks/useSession.jsx'
import { HoverBoxes } from './components/HoverBoxers/index.jsx';
function App() {

  return (
    <sessionProvider>
      <Header />
      <HoverBoxes />
    </sessionProvider>
  )
}

export default App
