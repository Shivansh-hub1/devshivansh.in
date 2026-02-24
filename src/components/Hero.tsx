import { useState, useEffect } from 'react';
import { downloadCV } from '../utils/downloadCV';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Tech Enthusiast & Web Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Terminal Window */}
        <div className="bg-terminal-surface rounded-lg border border-terminal-border overflow-hidden shadow-2xl mb-8 opacity-0 animate-fade-in-up">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-terminal-bg border-b border-terminal-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-terminal-red" />
              <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
              <div className="w-3 h-3 rounded-full bg-terminal-green" />
            </div>
            <span className="text-terminal-text-muted text-sm font-mono ml-2">shivansh@portfolio:~</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 text-left font-mono">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-terminal-green">$</span>
              <span className="text-terminal-text">whoami</span>
            </div>
            <div className="pl-4 mb-4">
              <p className="text-terminal-cyan text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                Shivansh Vishwakarma
              </p>
              <p className="text-terminal-purple text-sm sm:text-base">
                Student: Class 12
              </p>
            </div>

            <div className="flex items-start gap-2 mb-2">
              <span className="text-terminal-green">$</span>
              <span className="text-terminal-text">cat role.txt</span>
            </div>
            <div className="pl-4 mb-4">
              <p className="text-terminal-text text-lg sm:text-xl">
                {typedText}
                <span className="cursor-blink text-terminal-green">|</span>
              </p>
            </div>

            <div className="flex items-start gap-2 mb-2">
              <span className="text-terminal-green">$</span>
              <span className="text-terminal-text">echo $INTERESTS</span>
            </div>
            <div className="pl-4">
              <p className="text-terminal-text-muted text-sm sm:text-base">
                Web development, tech projects, learning new tools, YouTube content creation 🚀
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-6 py-3 bg-terminal-green text-terminal-bg font-semibold rounded-lg hover:bg-terminal-cyan transition-all transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </a>
          <button
            onClick={downloadCV}
            className="group flex items-center gap-2 px-6 py-3 bg-terminal-purple text-white font-semibold rounded-lg hover:bg-terminal-blue transition-all transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </button>
          <a
            href="https://github.com/Shivansh-hub1"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-terminal-surface border border-terminal-border text-terminal-text rounded-lg hover:border-terminal-green hover:text-terminal-green transition-all transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            View GitHub
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 opacity-0 animate-fade-in-up animation-delay-500">
          <a href="#about" className="inline-flex flex-col items-center text-terminal-text-muted hover:text-terminal-green transition-colors">
            <span className="text-sm font-mono mb-2">scroll down</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
