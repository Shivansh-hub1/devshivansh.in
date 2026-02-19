import { useState, useRef, useEffect } from 'react';

interface TerminalProps {
  onClose: () => void;
}

export function Terminal({ onClose }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; output: string }[]>([
    { command: '', output: 'Welcome to Shivansh\'s Terminal! Type "help" for available commands.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const commands: Record<string, string> = {
    help: `Available commands:
  about     - Learn about Shivansh
  skills    - View technical skills
  contact   - Get contact information
  social    - View social media links
  clear     - Clear terminal
  exit      - Close terminal`,
    about: `👤 Shivansh Vishwakarma
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 Class 12 Student
💼 Tech Enthusiast & Web Developer

I am a Class 12 student and a tech enthusiast with 
a strong interest in web development. I enjoy building 
websites, experimenting with new ideas, and continuously 
improving my technical skills.

Currently focused on learning full-stack development
and creating real-world projects. 🚀`,
    skills: `🧠 Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[██████████] HTML           90%
[████████░░] CSS            85%
[████████░░] Web Design     80%
[███████░░░] JavaScript     70%
[████░░░░░░] Full-Stack     40% (Learning)

🔧 Tools: VS Code, Git, GitHub, Chrome DevTools`,
    contact: `📬 Contact Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email:    newtonsir869@gmail.com
🌐 Website:  shivansh.ct.ws
📱 WhatsApp: +918303172373`,
    social: `🌐 Social Media
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🐙 GitHub:   github.com/Shivansh-hub1
📺 YouTube:  @TechNotFound
📱 Telegram: @mogambo_khus_huaa`,
    clear: 'CLEAR',
    exit: 'EXIT',
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }
    
    if (trimmedCmd === 'exit') {
      onClose();
      return;
    }

    const output = commands[trimmedCmd] || `Command not found: ${trimmedCmd}. Type "help" for available commands.`;
    
    setHistory([...history, { command: cmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-terminal-bg rounded-lg border border-terminal-border shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-terminal-surface border-b border-terminal-border">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-terminal-red hover:brightness-110 transition-all"
            />
            <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
            <div className="w-3 h-3 rounded-full bg-terminal-green" />
          </div>
          <span className="text-terminal-text-muted text-sm font-mono">shivansh@portfolio:~</span>
          <button
            onClick={onClose}
            className="text-terminal-text-muted hover:text-terminal-text transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="h-80 overflow-y-auto p-4 font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, index) => (
            <div key={index} className="mb-4">
              {item.command && (
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-terminal-green">$</span>
                  <span className="text-terminal-text">{item.command}</span>
                </div>
              )}
              <pre className="text-terminal-text-muted whitespace-pre-wrap pl-4">
                {item.output}
              </pre>
            </div>
          ))}
          
          {/* Input Line */}
          <div className="flex items-center gap-2">
            <span className="text-terminal-green">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-terminal-text outline-none caret-terminal-green"
              autoFocus
            />
            <span className="cursor-blink text-terminal-green">|</span>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-2 bg-terminal-surface border-t border-terminal-border">
          <div className="flex items-center justify-between text-xs text-terminal-text-muted font-mono">
            <span>Press <kbd className="px-1 py-0.5 bg-terminal-bg rounded border border-terminal-border">Esc</kbd> to close</span>
            <span>Type <span className="text-terminal-green">help</span> for commands</span>
          </div>
        </div>
      </div>
    </div>
  );
}
