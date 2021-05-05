/*

    Задание 2.

    Напишите 3 функции, которые изменяют цвет фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background.
    А также выводят картинку с иконкой на экран.

    1. Ф-я принимает цвет фона, а цвет текста и картинка попадают в неё через метод .call(obj)
    2. Ф-я не принимает никаких аргументов, а необходимые настройки полностью передаются через bind
    3. Ф-я принимает картинку, а объект с настройками цветов передаем через .apply();

*/
let colors = {
  background: "purple",
  color: "white",
  image: "https://cdn.icon-icons.com/icons2/1451/PNG/512/jsfolder_99356.png",
};

let block = document.createElement("div");
block.textContent = "Test block";
let img = document.createElement("img");
document.body.appendChild(block);
document.body.appendChild(img);

// function metodCall(color, icon) {
//   block.style.background = this.background;
//   block.style.color = color;
//   img.src = icon;
// }

// metodCall.call(
//   colors,
//   "red",
//   "https://cdn.icon-icons.com/icons2/1451/PNG/512/jsfolder_99356.png"
// );

// function metodBind() {
//   block.style.background = this.background;
//   block.style.color = this.color;
//   img.src = this.image;
// }
// let bind = metodBind.bind(colors);
// bind();

// function metodApply(background, color) {
//   block.style.background = background;
//   block.style.color = color;
//   img.src = this.image;
// }

// metodApply.apply(colors, ["green", "brown"]);
