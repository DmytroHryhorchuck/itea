  // addEventListener
  function ChangeBackColor( event ){
    let color = event.target.dataset.color;
        console.log( event, event.target, color );
        document.body.style.background = color;
  }
  
  let btn = document.getElementById('test_btn');
      btn.addEventListener('click', ChangeBackColor);

  let buttonsSelector = document.querySelectorAll('._changeColor');
  console.log( buttonsSelector );

  buttonsSelector.forEach( function( btn ){
    btn.addEventListener('click', ChangeBackColor );
  });

  // let nButton = document.querySelector('._changeColor');
  //     nButton.removeEventListener('click', ChangeBackColor);

  /*
    Добавление несколько обработчиков на один элемент
  */

  function mFunc1(){ console.log('Log1');}
  function mFunc2(){ console.log('Log2');}
  function mFunc3(){ console.log('Log3');}

  MultiEvent.addEventListener('click', mFunc1);
  MultiEvent.addEventListener('click', mFunc3);
  MultiEvent.addEventListener('click', mFunc2);

  /*

    Итог:
      Есть 3 способа назнчить обработчик событий:

      Атрибут HTML: onclick="...".
      Свойство: elem.onclick = function.
      Специальный методы: elem.addEventListener

  */

  // - - - -
  // В консоли для получения обработчиков (Работает только в хроме)
  // getEventListeners( MultiEvent );

