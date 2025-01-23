$(".card").on("click", function () {
  $(this).toggleClass("rotated");
});

// $(".card").on("click", function () {
//   // Перемикаємо клас "rotated"
//   $(this).toggleClass("rotated");

//   // Якщо картка стала активною
//   if ($(this).hasClass("rotated")) {
//     // Генеруємо випадковий id для картинки
//     const randomId = Math.floor(Math.random() * 10); // Picsum має багато картинок
//     const newSrc = `https://picsum.photos/id/${randomId}/300/200`;

//     // Знаходимо зображення в поточній картці та змінюємо посилання
//     $(this).find("img").attr("src", newSrc);
//   }
// });
