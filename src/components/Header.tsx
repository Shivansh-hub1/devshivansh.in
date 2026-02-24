import { useState } from 'react';
import { downloadCV } from '../utils/downloadCV';

interface HeaderProps {
  onTerminalToggle: () => void;
}

export function Header({ onTerminalToggle }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/80 backdrop-blur-md border-b border-terminal-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-terminal-green to-terminal-cyan flex items-center justify-center">
              <span className="text-terminal-bg font-bold text-sm">SV</span>
            </div>
            <span className="font-mono text-terminal-green group-hover:text-terminal-cyan transition-colors">
              ~/shivansh
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-terminal-text-muted hover:text-terminal-green transition-colors"
              >
                <span className="text-terminal-purple">.</span>{link.label}
              </a>
            ))}
            <button
              onClick={downloadCV}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-terminal-purple/20 border border-terminal-purple/40 text-terminal-purple hover:bg-terminal-purple hover:text-white transition-all text-sm font-mono"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>CV</span>
            </button>
            <button
              onClick={onTerminalToggle}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-terminal-surface border border-terminal-border text-terminal-text-muted hover:text-terminal-green hover:border-terminal-green transition-all text-sm font-mono"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="hidden lg:inline">Ctrl+`</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-terminal-text-muted hover:text-terminal-green transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-terminal-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-sm text-terminal-text-muted hover:text-terminal-green transition-colors"
                >
                  <span className="text-terminal-purple">$</span> cd {link.label.toLowerCase()}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadCV();
                }}
                className="flex items-center gap-2 text-terminal-purple hover:text-terminal-blue transition-colors font-mono text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTerminalToggle();
                }}
                className="flex items-center gap-2 text-terminal-text-muted hover:text-terminal-green transition-colors font-mono text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Open Terminal
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
