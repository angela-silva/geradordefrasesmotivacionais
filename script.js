const quotes = [
  "Acredite em você e tudo será possível! ✨",
  "Grandes jornadas começam com um simples passo. 🚀",
  "Você é capaz de conquistar coisas incríveis! 🌟",
  "Seja a energia que você deseja atrair. 💖",
  "O sucesso é construído um dia de cada vez. 💪",
  "Respire fundo, confie no processo e vá em frente. 🌸",
  "Nada pode parar uma mente determinada. 🧠🔥",
  "Você é mais forte do que imagina! 🌈",
  "Transforme seus sonhos em planos, e seus planos em realidade. 🌟",
  "A vida sorri para quem não desiste. 😊"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = document.getElementById("quote");
  
  // Animação suave
  quoteText.style.opacity = 0;
  setTimeout(() => {
    quoteText.textContent = quotes[randomIndex];
    quoteText.style.opacity = 1;
  }, 300);
}
