:root {
  --angel-blue: #00d2ff;
  --angel-glow: rgba(0, 210, 255, 0.6);
  --trench-coat: #c8a063;
  --dark-bg: #050608;
  --card-bg: rgba(15, 18, 24, 0.92);
  --text-light: #e0e6ed;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Special Elite', cursive, monospace;
  background-color: var(--dark-bg);
  background-image: 
    radial-gradient(circle at 50% 30%, rgba(0, 100, 180, 0.25) 0%, transparent 60%),
    radial-gradient(circle at 50% 100%, #1a0800 0%, var(--dark-bg) 70%);
  color: var(--text-light);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow-x: hidden;
  position: relative;
}

/* Sombra das Asas do Castiel no Fundo */
.angel-wings-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 500px;
  background: radial-gradient(ellipse at center, rgba(0, 210, 255, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
}

.quiz-container {
  position: relative;
  z-index: 1;
  background: var(--card-bg);
  border: 2px solid var(--trench-coat);
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.9), 0 0 15px var(--angel-glow), inset 0 0 20px rgba(0,0,0,0.8);
  border-radius: 4px;
  width: 100%;
  max-width: 600px;
  padding: 35px 25px;
  text-align: center;
}

/* Símbolo de Anti-posse no topo */
.anti-possession-symbol {
  font-size: 2.2rem;
  color: var(--trench-coat);
  text-shadow: 0 0 10px var(--trench-coat);
  margin-bottom: 5px;
}

.header-tag {
  margin-bottom: 10px;
}

#step-badge {
  background: rgba(0, 210, 255, 0.1);
  border: 1px solid var(--angel-blue);
  color: var(--angel-blue);
  padding: 4px 14px;
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  box-shadow: 0 0 8px var(--angel-glow);
}

h1 {
  font-family: 'Cinzel Decorative', 'Cinzel', serif;
  font-size: 2.2rem;
  color: #ffffff;
  letter-spacing: 4px;
  text-shadow: 0 0 10px #fff, 0 0 20px var(--angel-blue);
  margin-top: 10px;
}

.sub-title {
  font-family: 'Cinzel', serif;
  color: var(--trench-coat);
  font-size: 0.85rem;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.story-text {
  background: rgba(0, 0, 0, 0.6);
  border-left: 3px solid var(--trench-coat);
  border-right: 1px solid rgba(200, 160, 99, 0.2);
  padding: 18px;
  text-align: left;
  font-size: 1rem;
  line-height: 1.6;
  color: #d1d5db;
  margin-bottom: 25px;
  box-shadow: inset 0 0 10px #000;
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn-option {
  background: rgba(10, 14, 20, 0.8);
  border: 1px solid var(--trench-coat);
  color: #ffffff;
  padding: 16px 20px;
  font-family: 'Special Elite', monospace;
  font-size: 0.95rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  position: relative;
}

.btn-option:hover {
  background: rgba(0, 210, 255, 0.15);
  border-color: var(--angel-blue);
  color: var(--angel-blue);
  box-shadow: 0 0 15px var(--angel-glow);
  transform: scale(1.01);
}

.progress-container {
  margin-top: 30px;
}

.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(200, 160, 99, 0.3);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--trench-coat), var(--angel-blue));
  box-shadow: 0 0 10px var(--angel-blue);
  width: 0%;
  transition: width 0.4s ease;
}

.restart-btn {
  background: transparent;
  border: 2px solid var(--angel-blue);
  color: var(--angel-blue);
  padding: 14px 28px;
  font-family: 'Cinzel', serif;
  font-weight: bold;
  font-size: 0.95rem;
  letter-spacing: 2px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.restart-btn:hover {
  background: var(--angel-blue);
  color: #000;
  box-shadow: 0 0 25px var(--angel-blue);
}

.symbol-header {
  font-size: 2rem;
  margin-bottom: 10px;
}

h2 {
  font-family: 'Cinzel', serif;
  color: var(--trench-coat);
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.hide {
  display: none !important;
}
