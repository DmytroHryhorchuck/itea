/*

	Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    символов на которые нужно сделать сдвиг внутри.

    Написать функцию дешифратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешифровать
    слова с статично забитым шагом от одного до 5.

    Например:
		encryptCesar( 3, 'Word');
		encryptCesar1(...)
		...
		encryptCesar5(...)

		decryptCesar1(3, 'Sdwq');
		decryptCesar1(...)
		...
		decryptCesar5(...)

		"а".charCodeAt(); // 1072
		String.fromCharCode(189, 43, 190, 61) // ½+¾
*/

let encryptCesar = function (step, word) {
  const wordArr = word.split("");
  let encryptedWord = "";
  wordArr.forEach((letter) => {
    encryptedWord += String.fromCharCode([letter.charCodeAt() + step]);
  });
  return encryptedWord;
};

let decryptCesar = function (step, word) {
  const wordArr = word.split("");
  let decryptedWord = "";
  wordArr.forEach((letter) => {
    decryptedWord += String.fromCharCode([letter.charCodeAt() - step]);
  });
  return decryptedWord;
};

console.log(encryptCesar(3, "Polina"));
console.log(decryptCesar(3, encryptCesar(3, "Polina")));

const encryptCesar1 = encryptCesar.bind(null, 1);
const decryptCesar1 = decryptCesar.bind(null, 1);
const encryptCesar2 = encryptCesar.bind(null, 2);
const decryptCesar2 = decryptCesar.bind(null, 2);
const encryptCesar3 = encryptCesar.bind(null, 3);
const decryptCesar3 = decryptCesar.bind(null, 3);
const encryptCesar4 = encryptCesar.bind(null, 4);
const decryptCesar4 = decryptCesar.bind(null, 4);
const encryptCesar5 = encryptCesar.bind(null, 5);
const decryptCesar5 = decryptCesar.bind(null, 5);

console.log(encryptCesar3("Polina"));
console.log(decryptCesar3(encryptCesar3("Polina")));
