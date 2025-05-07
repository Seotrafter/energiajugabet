document.addEventListener('DOMContentLoaded', function () {
  // Находим все формы на сайте
  const forms = document.querySelectorAll('form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Отменяем стандартную отправку формы
      // Перенаправляем пользователя на страницу благодарности
      window.location.href = "thanks.html";
    });
  });
});
