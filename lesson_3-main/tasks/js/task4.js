/*
	Задание написать простой слайдер.

	Есть массив с картинками из которых должен состоять наш слайдер.
	По умолчанию выводим первый элемент нашего слайдера в блок с id='slider'
	( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
	По клику на PrevSlide/NextSlide показываем предыдущий или следующий слайд соответственно.

	Для этого необходимо написать 4 функции которые будут:

	1. Срабатывать на событие load объекта window и загружать наш слайд по умолчанию.
	2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
	3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
	4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
		+ бонус сделать так чтобы при достижении последнего и первого слайда вас после кидало на первый и последний слайд соответственно.
		+ бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

window.addEventListener("load", function (event) {
  let OurSliderImages = [
    "images/cat1.jpg",
    "images/cat2.jpg",
    "images/cat3.jpg",
    "images/cat4.jpg",
    "images/cat5.jpg",
    "images/cat6.jpg",
    "images/cat7.jpg",
    "images/cat8.jpg",
  ];
  let currentPosition = 0;

  const sliderBlock = document.getElementById("slider");
  const NextSilde = document.getElementById("NextSilde");
  const PrevSilde = document.getElementById("PrevSilde");

  function renderImage(src) {
    sliderBlock.innerHTML = "";
    let img = document.createElement("img");
    img.src = src;
    sliderBlock.appendChild(img);
    img.classList.add("loadedImage");
  }
  renderImage(OurSliderImages[0]);

  const nextImage = function () {
    if (currentPosition == OurSliderImages.length - 1) {
      renderImage(OurSliderImages[0]);
      currentPosition = 0;
    } else {
      renderImage(OurSliderImages[currentPosition + 1]);
      currentPosition++;
    }
  };

  const prevImg = function () {
    if (currentPosition == 0) {
      renderImage(OurSliderImages[OurSliderImages.length - 1]);
      currentPosition = OurSliderImages.length - 1;
    } else {
      renderImage(OurSliderImages[currentPosition - 1]);
      currentPosition--;
    }
  };
  NextSilde.addEventListener("click", nextImage);
  PrevSilde.addEventListener("click", prevImg);
});
