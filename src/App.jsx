import { Header } from './components/header/index.jsx'
import { SessionProvider } from './hooks/useSession.tsx'
import { HoverBoxes } from "./components/hoverboxes/HoverBoxes.jsx";
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
