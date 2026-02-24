export function downloadCV() {
  const cvContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shivansh Vishwakarma - CV</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #ffffff;
      color: #1a1a2e;
      font-size: 14px;
      line-height: 1.6;
    }

    .page {
      max-width: 820px;
      margin: 0 auto;
      padding: 40px 48px;
    }

    /* HEADER */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 3px solid #3fb950;
      padding-bottom: 20px;
      margin-bottom: 28px;
    }

    .header-left h1 {
      font-size: 32px;
      font-weight: 700;
      color: #0d1117;
      letter-spacing: -0.5px;
    }

    .header-left .subtitle {
      font-size: 15px;
      color: #3fb950;
      font-weight: 600;
      margin-top: 4px;
    }

    .header-left .class-tag {
      display: inline-block;
      margin-top: 6px;
      background: #e8f5e9;
      color: #2e7d32;
      padding: 2px 10px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    .header-right {
      text-align: right;
      font-size: 12px;
      color: #555;
      line-height: 1.9;
    }

    .header-right a {
      color: #1565c0;
      text-decoration: none;
    }

    .header-right span.label {
      font-weight: 600;
      color: #333;
    }

    /* SECTION */
    .section {
      margin-bottom: 24px;
    }

    .section-title {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #3fb950;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 5px;
      margin-bottom: 14px;
    }

    /* ABOUT */
    .about-text {
      color: #333;
      font-size: 13.5px;
      line-height: 1.75;
    }

    /* SKILLS */
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 30px;
    }

    .skill-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .skill-name {
      width: 170px;
      font-size: 13px;
      color: #222;
      font-weight: 500;
    }

    .skill-bar-wrap {
      flex: 1;
      background: #f0f0f0;
      border-radius: 6px;
      height: 8px;
      overflow: hidden;
    }

    .skill-bar {
      height: 100%;
      border-radius: 6px;
      background: linear-gradient(90deg, #3fb950, #56d4dd);
    }

    .skill-pct {
      font-size: 11px;
      color: #777;
      width: 30px;
      text-align: right;
    }

    /* TOOLS */
    .tools-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tool-tag {
      background: #f1f8e9;
      border: 1px solid #c5e1a5;
      color: #33691e;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    /* CONTACT */
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px 30px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
    }

    .contact-label {
      font-weight: 600;
      color: #444;
      min-width: 72px;
    }

    .contact-value {
      color: #1565c0;
    }

    /* INTERESTS */
    .interests-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .interest-tag {
      background: #e3f2fd;
      border: 1px solid #90caf9;
      color: #1565c0;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    /* FOOTER */
    .footer {
      margin-top: 32px;
      padding-top: 14px;
      border-top: 1px dashed #ccc;
      text-align: center;
      font-size: 11px;
      color: #aaa;
    }

    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .page { padding: 30px 40px; }
    }
  </style>
</head>
<body>
  <div class="page">

    <!-- HEADER -->
    <div class="header">
      <div class="header-left">
        <h1>Shivansh Vishwakarma</h1>
        <div class="subtitle">Tech Enthusiast &amp; Web Developer</div>
        <span class="class-tag">📚 Class 12 Student</span>
      </div>
      <div class="header-right">
        <div><span class="label">Email:</span> newtonsir869@gmail.com</div>
        <div><span class="label">GitHub:</span> <a href="https://github.com/Shivansh-hub1">github.com/Shivansh-hub1</a></div>
        <div><span class="label">Portfolio:</span> <a href="https://shivansh.ct.ws">shivansh.ct.ws</a></div>
        <div><span class="label">YouTube:</span> <a href="https://www.youtube.com/@TechNotFound">@TechNotFound</a></div>
        <div><span class="label">WhatsApp:</span> +918303172373</div>
        <div><span class="label">Telegram:</span> @mogambo_khus_huaa</div>
      </div>
    </div>

    <!-- ABOUT -->
    <div class="section">
      <div class="section-title">About Me</div>
      <p class="about-text">
        I am a Class 12 student and a tech enthusiast with a strong interest in web development.
        I enjoy building websites, experimenting with new ideas, and continuously improving my technical skills.
        I am currently focused on learning full-stack development and creating real-world projects to strengthen
        my portfolio. When I'm not coding, I create tech tutorials and content on my YouTube channel for the community.
      </p>
    </div>

    <!-- SKILLS -->
    <div class="section">
      <div class="section-title">Technical Skills</div>
      <div class="skills-grid">
        <div class="skill-item">
          <div class="skill-name">HTML</div>
          <div class="skill-bar-wrap"><div class="skill-bar" style="width:90%"></div></div>
          <div class="skill-pct">90%</div>
        </div>
        <div class="skill-item">
          <div class="skill-name">CSS</div>
          <div class="skill-bar-wrap"><div class="skill-bar" style="width:85%"></div></div>
          <div class="skill-pct">85%</div>
        </div>
        <div class="skill-item">
          <div class="skill-name">Advanced Web Design</div>
          <div class="skill-bar-wrap"><div class="skill-bar" style="width:80%"></div></div>
          <div class="skill-pct">80%</div>
        </div>
        <div class="skill-item">
          <div class="skill-name">JavaScript</div>
          <div class="skill-bar-wrap"><div class="skill-bar" style="width:70%"></div></div>
          <div class="skill-pct">70%</div>
        </div>
        <div class="skill-item">
          <div class="skill-name">Full-Stack (Learning)</div>
          <div class="skill-bar-wrap"><div class="skill-bar" style="width:40%; background: linear-gradient(90deg,#f9a825,#ffcc02);"></div></div>
          <div class="skill-pct">40%</div>
        </div>
      </div>
    </div>

    <!-- TOOLS -->
    <div class="section">
      <div class="section-title">Tools &amp; Technologies</div>
      <div class="tools-list">
        <span class="tool-tag">VS Code</span>
        <span class="tool-tag">Git</span>
        <span class="tool-tag">GitHub</span>
        <span class="tool-tag">Chrome DevTools</span>
        <span class="tool-tag">Figma</span>
        <span class="tool-tag">Terminal</span>
        <span class="tool-tag">Node.js (Learning)</span>
        <span class="tool-tag">React (Learning)</span>
        <span class="tool-tag">MongoDB (Learning)</span>
      </div>
    </div>

    <!-- INTERESTS -->
    <div class="section">
      <div class="section-title">Interests</div>
      <div class="interests-list">
        <span class="interest-tag">🌐 Web Development</span>
        <span class="interest-tag">🔧 Tech Projects</span>
        <span class="interest-tag">📹 YouTube Content Creation</span>
        <span class="interest-tag">🚀 Learning New Tools</span>
        <span class="interest-tag">💡 Full-Stack Development</span>
        <span class="interest-tag">🤝 Open Source</span>
      </div>
    </div>

    <!-- CONTACT -->
    <div class="section">
      <div class="section-title">Contact &amp; Online Presence</div>
      <div class="contact-grid">
        <div class="contact-item">
          <span class="contact-label">📧 Email</span>
          <span class="contact-value">newtonsir869@gmail.com</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">🐙 GitHub</span>
          <span class="contact-value">github.com/Shivansh-hub1</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">🌐 Portfolio</span>
          <span class="contact-value">shivansh.ct.ws</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">📺 YouTube</span>
          <span class="contact-value">@TechNotFound</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">📱 WhatsApp</span>
          <span class="contact-value">+918303172373</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">✈️ Telegram</span>
          <span class="contact-value">@mogambo_khus_huaa</span>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="footer">
      Shivansh Vishwakarma &mdash; Portfolio: shivansh.ct.ws &mdash; Generated ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
    </div>

  </div>
  <script>
    window.onload = function() { window.print(); }
  </script>
</body>
</html>
`;

  const blob = new Blob([cvContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if (win) {
    win.onafterprint = () => {
      URL.revokeObjectURL(url);
    };
  }
}
