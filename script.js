const quizData = [
  {
    title: "Capítulo 1: O Resgate do Inferno",
    story: "Você é um anjo do Senhor enviado à Terra com uma missão divina. Você caminha pelas chamas do Inferno para salvar uma alma humana crucial.",
    options: [
      { text: "Agarrar Dean Winchester firmemente e levá-lo de volta.", score: 1 },
      { text: "Dizer 'Olá, Dean' e tentar bater um papo no caminho.", score: 0 }
    ]
  },
  {
    title: "Capítulo 2: O Primeiro Encontro",
    story: "Em um galpão escuro, faíscas voam enquanto os irmãos Winchester tentam entender quem você é. Dean te pergunta o que você é.",
    options: [
      { text: "Explicar calmamente: 'Eu sou aquele que te segurou com força e o puxou da perdição.'", score: 1 },
      { text: "Mostrar suas asas brilhantes e fazer um truque de mágica.", score: 0 }
    ]
  },
  {
    title: "Capítulo 3: O Sobretudo Sagrado",
    story: "Chegando à Terra, você precisa de um receptáculo e uma vestimenta para se misturar entre os humanos. Qual visual você adota?",
    options: [
      { text: "O terno clássico de Jimmy Novak com seu sobretudo bege icônico.", score: 1 },
      { text: "Uma jaqueta de couro igualzinha à do Dean para combinar.", score: 0 }
    ]
  },
  {
    title: "Capítulo 4: A Tecnologia Humana",
    story: "Dean te entrega um objeto estranho chamado 'celular' para se comunicarem. Como você lida com esse aparelho?",
    options: [
      { text: "Segura o celular de ponta-cabeça e cola na orelha sem entender muito bem.", score: 1 },
      { text: "Aprende instantaneamente e cria uma conta em todas as redes sociais.", score: 0 }
    ]
  },
  {
    title: "Capítulo 5: A Dúvida Divina",
    story: "Seus superiores no Céu exigem obediência cega, mas os Winchesters mostram o valor do livre-arbítrio. O que você decide?",
    options: [
      { text: "Rebelar-se contra os céus para proteger seus amigos humanos.", score: 1 },
      { text: "Voltar para o Céu e fingir que nada aconteceu.", score: 0 }
    ]
  },
  {
    title: "Capítulo 6: O Momento Humano",
    story: "Por um tempo, você perde sua graça angelical e se torna totalmente humano. Como você lida com as necessidades terrenas?",
    options: [
      { text: "Trabalha em um posto de conveniência (Gas-N-Sip) e aprende a amar comida.", score: 1 },
      { text: "Tenta voar do telhado achando que ainda tem asas.", score: 0 }
    ]
  },
  {
    title: "Capítulo 7: O Apelido de Amizade",
    story: "Dean começa a te chamar por um apelido carinhoso e reduzido. Como você reage?",
    options: [
      { text: "Aceita ser chamado carinhosamente de 'Cas' por seus melhores amigos.", score: 1 },
      { text: "Exige ser chamado apenas de 'Senhor Castiel, O Anjo'.", score: 0 }
    ]
  },
  {
    title: "Capítulo 8: O Purgatório",
    story: "Você e Dean ficam presos no Purgatório cercados por monstros. Para salvá-lo, o que você faz?",
    options: [
      { text: "Luta ao lado dele até garantir que ele consiga atravessar o portal.", score: 1 },
      { text: "Senta e espera o Crowley vir resgatar vocês.", score: 0 }
    ]
  },
  {
    title: "Capítulo 9: Pai Adotivo",
    story: "O jovem Jack, um Nephilim, precisa de orientação e carinho para aprender a usar seus poderes para o bem.",
    options: [
      { text: "Acolhe Jack como um filho e o protege de todas as ameaças.", score: 1 },
      { text: "Entrega o garoto para os anjos do Céu cuidarem.", score: 0 }
    ]
  },
  {
    title: "Capítulo 10: A Declaração Final",
    story: "Para salvar quem você ama da Morte, você precisa sentir uma verdadeira felicidade e expressar o que está no seu coração.",
    options: [
      { text: "Diz a Dean o quanto ele o mudou e que o ama, sorrindo em paz.", score: 1 },
      { text: "Apenas acena e desaparece em uma nuvem de fumaça.", score: 0 }
    ]
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  
  document.getElementById('step-badge').innerText = `Fase ${currentQuestion + 1} de 10`;
  document.getElementById('question-title').innerText = q.title;
  document.getElementById('story-description').innerText = q.story;
  
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'btn-option';
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.score);
    optionsContainer.appendChild(btn);
  });

  const progress = ((currentQuestion) / quizData.length) * 100;
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
    resultText.innerHTML = `🌟 <b>Anjo Fiel!</b> (Pontuação: ${score}/10)<br><br>Você reviveu a jornada do Castiel perfeitamente! Você compreende o valor da amizade, do livre-arbítrio e o carinho gigante que ele tem pela família Winchester. O sobretudo bege é oficialmente seu! 🧥✨`;
  } else {
    resultText.innerHTML = `☁️ <b>Anjo em Aprendizado!</b> (Pontuação: ${score}/10)<br><br>Você acompanhou a história do Castiel, mas acabou caindo em umas pegadinhas ao longo do caminho. Que tal tentar de novo para deixar o nosso anjinho orgulhoso? 😇`;
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById('result-screen').classList.add('hide');
  document.getElementById('quiz-screen').classList.remove('hide');
  loadQuestion();
}

// Inicializa o quiz ao carregar
loadQuestion();