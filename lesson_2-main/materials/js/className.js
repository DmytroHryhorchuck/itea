/*
  Любой DOM-элемент это обьект и соответствено мы можем его
  читать и изменять.
*/

  var target = document.getElementById('target');
  //     target.someObject = {
  //       host: 'ITEA',
  //       course: 'Js:Advanced'
  //     }

  // console.dir( target );

  // console.log( target.someObject );

  let newDivNode = document.createElement('div');
      newDivNode.innerText = 'New node';

  /* Классы в виде строки */
  // Задаем множественный класс
  newDivNode.className = 'itea class2 class3 class4 class5';

  /*
    Классы в виде обьекта
    Свойство ClassList поддерживается с IE10 + полифилы с IE8
    Classlist это псведомассив, его можно перебрать через for/forEach
  */

  console.log( newDivNode.classList )
  // newDivNode.classList.add('newClassToggle');
  // newDivNode.classList.remove('class2');
  newDivNode.classList.toggle('newClassToggle');
  // // Проверяем наличие класса у блока
  var contains = newDivNode.classList.contains("class2"); // false
  // console.log( contains );
  // console.log(newDivNode)

  // Немного ивентов
  zButton = document.getElementById('button');
  zButton.onclick = function() {
        console.log('toggle!');
      const window = document.getElementById('window');

      // if( window.classList.contains("hide") ){
      //   window.classList.remove("hide");
      // } else {
      //   window.classList.add("hide");
      // }
      window.classList.toggle("hide");
      console.log( window.classList.contains("hide") );
  }
