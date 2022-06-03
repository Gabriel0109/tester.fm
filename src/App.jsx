import { Header } from './components/header/index.jsx'
import { Navboxes } from './components/navboxes/index.jsx';
import { SessionProvider } from './hooks/useSession.tsx'
import './globals.css';

function App() {
  return (
    <SessionProvider>
      <Header />
      <Navboxes />
    </SessionProvider>
  )
}

export default App
