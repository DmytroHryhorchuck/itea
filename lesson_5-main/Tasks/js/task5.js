/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }

    2. Создать прототип, в котором будет содержаться ссылка на картинку по умолчанию, а
    так же метод который увеличивает счетчик лайков.

    let myComment1 = new Comment(...);

    3. Создать массив из 4х комментариев.
    (Подумайте, как их туда можно добавить в автоматическом режиме имея только массив)
    var CommentsArray = [myComment1, myComment2...]

    4. Создать функцию, которая принимает массив комментариев.
    И выводит каждый из них на страничку.

    Бонус:
    4. У каждого комментария, должна быть кнопка, при нажатии на которую будет вызываться метод
    addLike() и перересовыватся кол-во лайков на уже отрисованом комменте.
*/

function Comment(
  name,
  text,
  avatarUrl = "https://www.flaticon.com/svg/vstatic/svg/53/53125.svg?token=exp=1619346449~hmac=35b8982e0c2b28e3e87495a14c4db20f"
) {
  this.name = name;
  this.text = text;
  this.avatarUrl = avatarUrl;
  this.likes = 0;
  this.putLike = function () {
    this.likes++;
  };
}

let CommentsArray = [];

let comment1 = new Comment(
  "Ihor",
  "lalala",
  "https://www.flaticon.com/ru/premium-icon/icons/svg/3641/3641754.svg"
);
let comment2 = new Comment(
  "Polina",
  "lululu",
  "https://www.flaticon.com/svg/vstatic/svg/53/53125.svg?token=exp=1619346449~hmac=35b8982e0c2b28e3e87495a14c4db20f"
);
let comment3 = new Comment(
  "Liza",
  "lololo",
  "https://www.flaticon.com/ru/premium-icon/icons/svg/3641/3641752.svg"
);
let comment4 = new Comment(
  "Sem",
  "lelelele",
  "https://www.flaticon.com/ru/premium-icon/icons/svg/3334/3334037.svg"
);

function addCommenT() {
  const args = Array.from(arguments);
  args.forEach((element) => {
    CommentsArray.push(element);
  });
}

addCommenT.call(null, comment1, comment2, comment3, comment4);

const coments = document.getElementById("coments");

function renderComments(comments) {
  comments.forEach(function (coment) {
    const commentBlock = document.createElement("div");
    commentBlock.innerHTML = `
    <img class="avatar" src="" alt="" />
    <p class="name"></p>
    <p class="coment"></p>
    <p class="likes"></p>
    <button class="putLikes">Put like</button>`;
    coments.appendChild(commentBlock);
    const img = commentBlock.querySelector(".avatar");
    const name = commentBlock.querySelector(".name");
    const text = commentBlock.querySelector(".coment");
    const likes = commentBlock.querySelector(".likes");
    const button = commentBlock.querySelector(".putLikes");
    button.addEventListener("click", () => {
      coment.putLike();
      coments.innerHTML = "";
      renderComments(CommentsArray);
    });
    img.style.cssText = "width:150px; height:150px";
    img.src = coment.avatarUrl;
    name.innerHTML = coment.name;
    text.innerHTML = coment.text;
    likes.innerHTML = coment.likes;
  });
}

renderComments(CommentsArray);
