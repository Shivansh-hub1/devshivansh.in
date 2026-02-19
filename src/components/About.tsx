export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-terminal-green font-mono text-lg">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-terminal-text">About Me</h2>
          <div className="flex-1 h-px bg-terminal-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-terminal-surface rounded-lg border border-terminal-border p-6">
              <div className="flex items-center gap-2 mb-4 font-mono text-sm text-terminal-text-muted">
                <span className="text-terminal-green">$</span>
                <span>cat about.md</span>
              </div>
              <div className="prose prose-invert">
                <p className="text-terminal-text leading-relaxed mb-4">
                  I am a <span className="text-terminal-cyan font-semibold">Class 12 student</span> and a 
                  <span className="text-terminal-green font-semibold"> tech enthusiast</span> with a strong 
                  interest in web development. I enjoy building websites, experimenting with new ideas, and 
                  continuously improving my technical skills.
                </p>
                <p className="text-terminal-text leading-relaxed mb-4">
                  I am currently focused on learning <span className="text-terminal-purple font-semibold">full-stack development</span> and 
                  creating real-world projects to strengthen my portfolio.
                </p>
                <p className="text-terminal-text leading-relaxed">
                  When I'm not coding, you can find me creating content for my 
                  <span className="text-terminal-yellow font-semibold"> YouTube channel</span> where I share 
                  tech tutorials and insights with the community. 🚀
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Projects', value: '10+' },
                { label: 'Skills', value: '5+' },
                { label: 'Subscribers', value: 'Growing' },
                { label: 'Coffee', value: '∞' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-terminal-surface rounded-lg border border-terminal-border p-4 text-center hover:border-terminal-green transition-colors"
                >
                  <div className="text-2xl font-bold text-terminal-green">{stat.value}</div>
                  <div className="text-sm text-terminal-text-muted font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-terminal-surface rounded-lg border border-terminal-border p-6 sticky top-24">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-terminal-green via-terminal-cyan to-terminal-purple p-1">
                  <div className="w-full h-full rounded-full bg-terminal-surface flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-terminal-green text-terminal-bg text-xs font-mono rounded-full">
                  Available
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-terminal-text">Shivansh Vishwakarma</h3>
                <p className="text-sm text-terminal-text-muted font-mono">@TechNotFound</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-terminal-text-muted">
                  <svg className="w-4 h-4 text-terminal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>India</span>
                </div>
                <div className="flex items-center gap-3 text-terminal-text-muted">
                  <svg className="w-4 h-4 text-terminal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Class 12 Student</span>
                </div>
                <div className="flex items-center gap-3 text-terminal-text-muted">
                  <svg className="w-4 h-4 text-terminal-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
