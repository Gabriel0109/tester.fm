import { Header } from './components/header/index.jsx'
import { SessionProvider } from './hooks/useSession.tsx'
import { Hoverboxes } from "./components/hoverboxes/HoverBoxes.jsx";
import './globals.css';
function App() {

  return (
    <SessionProvider>
      <Header />
      <Hoverboxes/>
    </SessionProvider>
  )
}

export default App
