import { SessionProvider } from './hooks/useSession.tsx'
import { HoverBoxes } from './components/HoverBoxers/index.jsx';
import './globals.css';
function App() {

  return (
    <SessionProvider>
      <HoverBoxes />
    </SessionProvider>
  )
}

export default App
