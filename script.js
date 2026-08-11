// Dados dos Capítulos
const chapters = [
  {
    chapterText: "CAPÍTULO 1 DE 3",
    story: "Eu sou aquele que o resgatou da perdição. Qual foi o motivo do primeiro encontro entre Castiel e Dean Winchester no celeiro?",
    options: [
      "Castiel precisava avisar sobre o Apocalipse.",
      "Ele foi resgatar Dean do Inferno por ordem divina.",
      "Castiel queria caçar um demônio de olhos amarelos com Dean.",
      "Ele estava fugindo de outros anjos."
    ],
    correct: 1
  },
  {
    chapterText: "CAPÍTULO 2 DE 3",
    story: "Para proteger os irmãos Winchester e impedir a abertura do Apocalipse, o que Castiel usa para trair a vontade do Céu?",
    options: [
      "Uma lâmina angelical contra Zacarias.",
      "O Livro dos Condenados.",
      "Símbolos de sangue banidores de anjos.",
      "A Graça de Gabriel."
    ],
    correct: 2
  },
  {
    chapterText: "CAPÍTULO 3 DE 3",
    story: "Quando Castiel se torna temporariamente o 'Novo Deus', qual entidade sombria é absorvida junto com as almas do Purgatório?",
    options: [
      "Os Leviatãs.",
      "Os Cavaleiros do Apocalipse.",
      "A Escuridão (Amara).",
      "Lúcifer."
    ],
    correct: 0
  }
];

let currentChapter = 0;
let score = 0;

function loadChapter() {
  const currentData = chapters[currentChapter];

  const stepBadge = document.getElementById('step-badge');
  const storyDescription = document.getElementById('story-description');
  const optionsContainer = document.getElementById('options-container');
  const progressFill = document.getElementById('progress-fill');

  if (stepBadge) stepBadge.textContent = currentData.chapterText;
  if (storyDescription) storyDescription.textContent = currentData.story;

  if (progressFill) {
    const progressPercent = (currentChapter / chapters.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
  }

  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    currentData.options.forEach((optionText, index) => {
      const button = document.createElement('button');
      button.classList.add('btn-option');
      button.textContent = `${index + 1}. ${optionText}`;
      button.onclick = () => selectOption(index);
      optionsContainer.appendChild(button);
    });
  }
}

function selectOption(index) {
  if (index === chapters[currentChapter].correct) {
    score++;
  }

  currentChapter++;

  if (currentChapter < chapters.length) {
    loadChapter();
  } else {
    showResult();
  }
}

function showResult() {
  const quizScreen = document.getElementById('quiz-screen');
  const resultScreen = document.getElementById('result-screen');
  const progressFill = document.getElementById('progress-fill');
  const resultText = document.getElementById('result-text');

  if (quizScreen) quizScreen.classList.add('hide');
  if (resultScreen) resultScreen.classList.remove('hide');
  if (progressFill) progressFill.style.width = '100%';

  if (resultText) {
    if (score === chapters.length) {
      resultText.innerHTML = `<strong>Impressionante!</strong> Você acertou ${score} de ${chapters.length} escolhas. Sua ligação com o Céu e a Caçada é inabalável.`;
    } else {
      resultText.innerHTML = `Você acertou ${score} de ${chapters.length} escolhas. A jornada teve percalços, mas você ainda tem a graça angelical ao seu lado.`;
    }
  }
}

function restartQuiz() {
  currentChapter = 0;
  score = 0;
  const quizScreen = document.getElementById('quiz-screen');
  const resultScreen = document.getElementById('result-screen');
  
  if (resultScreen) resultScreen.classList.add('hide');
  if (quizScreen) quizScreen.classList.remove('hide');
  
  loadChapter();
}

// Inicia automaticamente quando o script carrega
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadChapter);
} else {
  loadChapter();
}
