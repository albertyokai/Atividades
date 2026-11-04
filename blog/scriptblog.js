const textarea = document.getElementById('textarea');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

function mostrarcomentario() {
  const texto_digitado = textarea.value;
  result.textContent = texto_digitado;
}

submit.addEventListener('click', mostrarcomentario);


const textarea2 = document.getElementById('textarea2');
const submit2 = document.getElementById('submit2');
const result2 = document.getElementById('result2');

function mostrarcomentario2() {
  const texto_digitado = textarea2.value;
  result2.textContent = texto_digitado;
}

submit2.addEventListener('click', mostrarcomentario2);


const textarea3 = document.getElementById('textarea3');
const submit3 = document.getElementById('submit3');
const result3 = document.getElementById('result3');

function mostrarcomentario3() {
  const texto_digitado = textarea3.value;
  result3.textContent = texto_digitado;
}

submit3.addEventListener('click', mostrarcomentario3);


document.querySelectorAll('.carrossel').forEach((carrossel) => {
  const slides = carrossel.querySelector('.slides');
  const imagens = carrossel.querySelectorAll('.slides img');
  const btnEsq = carrossel.querySelector('.esquerda');
  const btnDir = carrossel.querySelector('.direita');

  let index = 0;

  function mostrarSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  btnDir.addEventListener('click', () => {
    index = (index + 1) % imagens.length;
    mostrarSlide();
  });

  btnEsq.addEventListener('click', () => {
    index = (index - 1 + imagens.length) % imagens.length;
    mostrarSlide();
  });

  setInterval(() => {
    index = (index + 1) % imagens.length;
    mostrarSlide();
  }, 3000);
});
