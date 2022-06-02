import { Header } from './components/Header/Header.jsx'
import { SessionProvider } from './hooks/useSession.tsx'
import { HoverBoxes } from './components/HoverBoxers/index.jsx';
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
