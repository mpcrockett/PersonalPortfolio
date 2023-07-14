import { useState } from 'react'
import './App.css'
import useMediaQuery from './hooks/useMediaQuery';
import NavBar from './scenes/NavBar';

function App() {
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-deep-blue">
      <NavBar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
    </div>
  )
}

export default App
