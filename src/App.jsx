import { Header } from './Header/Header.jsx'
import { SessionProvider } from './hooks/useSession.tsx'
import { HoverBoxes } from './components/HoverBoxes/index.jsx';
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
