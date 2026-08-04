const quizData = [
  {
    title: "O Resgate do Inferno",
    story: "Você é um anjo do Senhor enviado à Terra em missão divina. Você caminha pelas chamas do Inferno para resgatar uma alma humana crucial.",
    options: [
      { text: "Agarrar Dean Winchester firmemente e puxá-lo da perdição.", score: 1 },
      { text: "Dizer 'Olá, Dean' e tentar bater um papo no caminho.", score: 0 }
    ]
  },
  {
    title: "O Primeiro Encontro",
    story: "Em um galpão escuro, luzes piscam e faíscas voam. Os irmãos Winchester exigem saber quem você é.",
    options: [
      { text: "Explicar: 'Eu sou aquele que te segurou com força e o puxou da perdição.'", score: 1 },
      { text: "Mostrar suas asas brilhantes e fazer um truque de mágica.", score: 0 }
    ]
  },
  {
    title: "O Sobretudo Sagrado",
    story: "Na Terra, você precisa de um receptáculo e vestimenta adequada para se misturar aos humanos. O que você veste?",
    options: [
      { text: "O terno de Jimmy Novak com o icônico sobretudo bege meio amarrotado.", score: 1 },
      { text: "Uma jaqueta de couro preta para combinar com a do Dean.", score: 0 }
    ]
  },
  {
    title: "A Tecnologia Humana",
    story: "Dean te entrega um objeto estranho e pequeno chamado 'celular' para se comunicarem.",
    options: [
      { text: "Segurar o aparelho de ponta-cabeça colado no ouvido sem entender bem.", score: 1 },
      { text: "Aprender instantaneamente e criar perfil em todas as redes sociais.", score: 0 }
    ]
  },
  {
    title: "A Dúvida Divina",
    story: "Seus superiores no Céu exigem obediência cega, mas os caçadores mostram a força do livre-arbítrio.",
    options: [
      { text: "Rebelar-se contra o Céu para proteger os Winchesters.", score: 1 },
      { text: "Voltar para o Céu e fingir que nada aconteceu.", score: 0 }
    ]
  },
  {
    title: "O Momento Humano",
    story: "Você perde temporariamente sua Graça e se torna 100% humano, precisando de um emprego terreno.",
    options: [
      { text: "Trabalhar no posto de conveniência 'Gas-N-Sip' e aprender a amar comida.", score: 1 },
      { text: "Tentar voar do telhado achando que as asas ainda funcionam.", score: 0 }
    ]
  },
  {
    title: "O Apelido de Amizade",
    story: "Dean começa a encurtar seu nome e te chamar por um apelido carinhoso.",
    options: [
      { text: "Aceitar ser chamado de 'Cas' pela sua nova família.", score: 1 },
      { text: "Exigir ser chamado apenas de 'Senhor Castiel, O Anjo'.", score: 0 }
    ]
  },
  {
    title: "O Purgatório",
    story: "Preso no Purgatório cercado por monstros famintos, o portal de saída está se fechando.",
    options: [
      { text: "Lutar com sua Angel Blade até garantir a fuga de Dean.", score: 1 },
      { text: "Sentar e esperar o Crowley aparecer para resgatar vocês.", score: 0 }
    ]
  },
  {
    title: "Pai Adotivo",
    story: "O jovem Jack, um Nephilim com imenso poder, precisa de orientação moral para não se perder.",
    options: [
      { text: "Acolher Jack como um filho e protegê-lo de todas as ameaças.", score: 1 },
      { text: "Entregar o garoto aos anjos do Céu.", score: 0 }
    ]
  },
  {
    title: "A Declaração Final",
    story: "Para derrotar a Morte (Sombra), você precisa vivenciar um momento de verdadeira felicidade no coração.",
    options: [
      { text: "Dizer a Dean o quanto ele te mudou e que você o ama, sorrindo em paz.", score: 1 },
      { text: "Apenas acenar e desaparecer numa nuvem de fumaça.", score: 0 }
    ]
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  
  document.getElementById('step-badge').innerText = `CAPÍTULO ${currentQuestion + 1} DE 10`;
  document.getElementById('question-title').innerText = q.title;
  document.getElementById('story-description').innerText = q.story;
  
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'btn-option';
    btn.innerText = `🗡️  ${opt.text}`;
    btn.onclick = () => selectOption(opt.score);
    optionsContainer.appendChild(btn);
  });

  const progress = (currentQuestion / quizData.length) * 100;
  document.getElementById('progress-fill').style.width = `${progress}%`;
}

function selectOption(points) {
  score += points;
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz-screen').classList.add('hide');
  document.getElementById('result-screen').classList.remove('hide');

  const resultText = document.getElementById('result-text');
  if (score >= 8) {
    resultText.innerHTML = `
      <b>GRAÇA ANGELICAL RESTAURADA!</b> (${score}/10 pontos)<br><br>
      Você provou ser um anjo fiel e um verdadeiro caçador! Compreende o peso do livre-arbítrio e o laço inquebrável com a família Winchester. O sobretudo bege e as asas de sombra são seus por direito. 🪶✨
    `;
  } else {
    resultText.innerHTML = `
      <b>ANJO CAÍDO EM APRENDIZADO...</b> (${score}/10 pontos)<br><br>
      Sua Graça angelical está fraca. Você ainda hesita entre as regras cegas do Céu e o caminho dos caçadores. Dê um 'restart' e tente novamente honrar a história do Cas! 😇
    `;
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById('result-screen').classList.add('hide');
  document.getElementById('quiz-screen').classList.remove('hide');
  loadQuestion();
}

// Garante o carregamento correto ao abrir
window.onload = loadQuestion;
