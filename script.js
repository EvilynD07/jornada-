// Dados dos Capítulos do Quiz
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

// Elementos do DOM
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const stepBadge = document.getElementById('step-badge');
const storyDescription = document.getElementById('story-description');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');
const resultText = document.getElementById('result-text');

// Função para carregar o capítulo atual
function loadChapter() {
  const currentData = chapters[currentChapter];

  // Atualiza os textos
  stepBadge.textContent = currentData.chapterText;
  storyDescription.textContent = currentData.story;

  // Atualiza a barra de progresso
  const progressPercent = ((currentChapter) / chapters.length) * 100;
  progressFill.style.width = `${progressPercent}%`;

  // Limpa as opções antigas
  optionsContainer.innerHTML = '';

  // Cria os novos botões
  currentData.options.forEach((optionText, index) => {
    const button = document.createElement('button');
    button.classList.add('btn-option');
    button.textContent = `${index + 1}. ${optionText}`;
    button.onclick = () => selectOption(index);
    optionsContainer.appendChild(button);
  });
}

// Função ao selecionar uma resposta
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

// Função para exibir a tela final
function showResult() {
  quizScreen.classList.add('hide');
  resultScreen.classList.remove('hide');
  progressFill.style.width = '100%';

  if (score === chapters.length) {
    resultText.innerHTML = `<strong>Impressionante!</strong> Você acertou ${score} de ${chapters.length} escolhas. Sua ligação com o Céu e a Caçada é inabalável. Castiel se orgulharia.`;
  } else if (score > 0) {
    resultText.innerHTML = `Você acertou ${score} de ${chapters.length} escolhas. A jornada teve percalços, mas você ainda tem a graça angelical ao seu lado.`;
  } else {
    resultText.innerHTML = `Você acertou ${score} de ${chapters.length} escolhas. Parece que as ilusões dos demônios confundiram seus passos. Tente novamente!`;
  }
}

// Função para reiniciar o quiz
function restartQuiz() {
  currentChapter = 0;
  score = 0;
  resultScreen.classList.add('hide');
  quizScreen.classList.remove('hide');
  loadChapter();
}

// Inicializa a primeira pergunta ao carregar a página
window.onload = loadChapter;
