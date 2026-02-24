import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Terminal } from './components/Terminal';

export function App() {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        setShowTerminal(!showTerminal);
      }
      if (e.key === 'Escape') {
        setShowTerminal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showTerminal]);

  return (
    <div className="min-h-screen bg-terminal-bg">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-terminal-surface via-terminal-bg to-terminal-bg opacity-50 pointer-events-none" />
      
      <div className="relative z-10">
        <Header onTerminalToggle={() => setShowTerminal(!showTerminal)} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

      {showTerminal && (
        <Terminal onClose={() => setShowTerminal(false)} />
      )}
    </div>
  );
}
