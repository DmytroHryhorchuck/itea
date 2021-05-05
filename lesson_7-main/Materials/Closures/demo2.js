const Demo = () => {

  function sayPhrase(){
    /*
      Phrase - локальная переменная которая доступна только из функции
      sayPhrase. Мы возвращаем из этой функции - другую функцию say
      которая использует переменную phrase.
    */
    const phrase = 'Hey, this is the 7th Lesson on JS Advanced Course!'
    const say = function(){ 
      console.log( phrase ) 
    };
    return say;
  }
  /*
    На момент инициализации, функция say знает о существовании переменной Phrase
    и может её использовать за пределами её лексического
    окружения.
  */
  const ClosurePhrase = sayPhrase();
        // console.log( phrase ); // <- error
        ClosurePhrase();

}

document.addEventListener('DOMContentLoaded', Demo);
