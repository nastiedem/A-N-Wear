document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert(`You clicked on ${button.textContent}`);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a"); // Ищем все ссылки

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Отменяем стандартное поведение ссылки
      const page = link.getAttribute("href"); // Получаем значение из href
      if (page) {
        window.location.href = page; // Выполняем переход
      } else {
        alert("Page URL is missing!");
      }
    });
  });
});
