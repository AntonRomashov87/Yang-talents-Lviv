// Таймер відліку
function countdownTimer() {
  const eventDate = new Date("Dec 14, 2025 09:15:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let message = `До старту залишилось: ${days}д ${hours}г ${minutes}хв ${seconds}с`;

  // Якщо залишилось менше доби
  if (distance > 0 && distance < 24 * 60 * 60 * 1000) {
    message += " ⏳ Залишилось менше доби!";
  }

  if (distance < 0) {
    message = "Турнір розпочався!";
  }

  document.getElementById("countdown").innerHTML = message;
}
setInterval(countdownTimer, 1000);

// Жеребкування
function generateDraw() {
  const participants = ["Іван", "Марія", "Олег", "Софія", "Андрій", "Катерина"];
  const shuffled = participants.sort(() => 0.5 - Math.random());
  const list = document.getElementById("drawList");
  list.innerHTML = "";
  shuffled.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = `${i+1}. ${p}`;
    list.appendChild(li);
  });
}

// Слайдер
let slideIndex = 0;
function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;
  if (index >= totalSlides) slideIndex = 0;
  else if (index < 0) slideIndex = totalSlides - 1;
  else slideIndex = index;
  slides.style.transform = `translateX(${-slideIndex * 700}px)`;
}

function nextSlide() { showSlide(slideIndex + 1); }
function prevSlide() { showSlide(slideIndex - 1); }

// Автоматична прокрутка
setInterval(() => { nextSlide(); }, 4000);
