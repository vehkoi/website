import { createContext, useState } from 'react';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'
import Skills from './components/Skills';

export const theme_context = createContext(null);

function App() {
  const [theme, setTheme] = useState("light")
  const toggle_theme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"))
  };

  return (
    <theme_context.Provider value={{ theme, toggle_theme }}>
      <div className="App" id={ theme }>
        <Navbar />
        <Hero />
        <Timeline />
        <Skills />
      </div>
    </theme_context.Provider>
  );
}

export default App;
