export function Skills() {
  const skills = [
    { name: 'HTML', level: 90, color: 'terminal-red', icon: '🔷' },
    { name: 'CSS', level: 85, color: 'terminal-blue', icon: '🎨' },
    { name: 'Advanced Web Design', level: 80, color: 'terminal-purple', icon: '✨' },
    { name: 'JavaScript', level: 70, color: 'terminal-yellow', icon: '⚡' },
    { name: 'Full-Stack (Learning)', level: 40, color: 'terminal-green', icon: '🔧' },
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Git', icon: '📁' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Chrome DevTools', icon: '🔍' },
    { name: 'Figma', icon: '🎯' },
    { name: 'Terminal', icon: '⌨️' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-terminal-surface/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-terminal-green font-mono text-lg">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-terminal-text">Skills & Tools</h2>
          <div className="flex-1 h-px bg-terminal-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills */}
          <div className="bg-terminal-surface rounded-lg border border-terminal-border p-6">
            <div className="flex items-center gap-2 mb-6 font-mono text-sm text-terminal-text-muted">
              <span className="text-terminal-green">$</span>
              <span>skills --list</span>
            </div>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span>{skill.icon}</span>
                      <span className="font-mono text-terminal-text">{skill.name}</span>
                    </div>
                    <span className="font-mono text-sm text-terminal-text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-terminal-bg rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:opacity-80`}
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color === 'terminal-red' ? '#f85149' :
                                        skill.color === 'terminal-blue' ? '#58a6ff' :
                                        skill.color === 'terminal-purple' ? '#bc8cff' :
                                        skill.color === 'terminal-yellow' ? '#d29922' :
                                        '#3fb950'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Learning */}
          <div className="space-y-6">
            {/* Tools */}
            <div className="bg-terminal-surface rounded-lg border border-terminal-border p-6">
              <div className="flex items-center gap-2 mb-6 font-mono text-sm text-terminal-text-muted">
                <span className="text-terminal-green">$</span>
                <span>tools --favorites</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-terminal-bg border border-terminal-border hover:border-terminal-green transition-colors group cursor-default"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{tool.icon}</span>
                    <span className="text-xs font-mono text-terminal-text-muted group-hover:text-terminal-text transition-colors text-center">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div className="bg-terminal-surface rounded-lg border border-terminal-border p-6">
              <div className="flex items-center gap-2 mb-6 font-mono text-sm text-terminal-text-muted">
                <span className="text-terminal-green">$</span>
                <span>learning --current</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-terminal-bg border border-terminal-border">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-terminal-green to-terminal-cyan flex items-center justify-center">
                    <span className="text-lg">🔧</span>
                  </div>
                  <div>
                    <div className="font-mono text-terminal-text">Full-Stack Development</div>
                    <div className="text-xs text-terminal-text-muted">Node.js, React, MongoDB</div>
                  </div>
                  <div className="ml-auto">
                    <span className="px-2 py-1 bg-terminal-yellow/20 text-terminal-yellow text-xs font-mono rounded">
                      In Progress
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-terminal-bg border border-terminal-border">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-terminal-purple to-terminal-blue flex items-center justify-center">
                    <span className="text-lg">📹</span>
                  </div>
                  <div>
                    <div className="font-mono text-terminal-text">Content Creation</div>
                    <div className="text-xs text-terminal-text-muted">YouTube, Tech Tutorials</div>
                  </div>
                  <div className="ml-auto">
                    <span className="px-2 py-1 bg-terminal-green/20 text-terminal-green text-xs font-mono rounded">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
