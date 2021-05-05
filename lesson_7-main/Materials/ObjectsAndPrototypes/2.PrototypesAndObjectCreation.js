  /*
      Углубляемся в прототипы
      Вспомним что и себя представляют прототипы в JS
  */

  // let cat = {
  //   eats: true,
  // };
  // let myCat = { name: 'Test', value: '123'};
  // Object.setPrototypeOf(myCat, cat);

  // console.log( myCat.name );  // Luna
  // console.log( myCat.eats );  // true
  // console.log( myCat );       // { name: Luna, __proto__: Object }

  /*
    JS - Прототипный, обьекто-ориентированный язык.
    Прототип является просто ссылкой которая указывает на обьект "Родителя"
    И может предствлять собой бесконечную вложеность их друг в друга
    Пишется в свойство __proto__ любого обьекта
    Что же собой являет сам прототип
  */

  // console.log( Object.prototype );

  /*
    Каждый наш прототип, который мы создаем наследует все свои методы с
    "Родительского" обьекта. Проверим это:
  */

  // console.log('cat proto equal to obj.prototype', cat.__proto__ === Object.prototype ); // true

  /*
    Убедимся в этом - модифицируем наш Object.prototype;
  */

  // Object.prototype.learning = true;
  // console.log( 'cat.__proto__.learning', cat.__proto__.learning ); // true
  // console.log( cat, cat.learning );

  /*
    Разница между __proto__ и prototype в том, что:
    Первый является свойством, которое указывает на обьект который является прототипом для текущего обьекта.
    А второй, это свойство ФУНКЦИИ,которое применяется только к функциям конструкторам
    и будет использовано для создания нового обьекта с приставкой new Fn/
  */

    // function Hamster( name, count){
    //     this.name = name;
    //     this.count = count;
    // }

    // Hamster.prototype.eat = function(){
    //     console.log(`${this.name} eating`);
    // }

    // Hamster.prototype.addCounter = function( sum ){
    //     this.count += sum;
    //     console.log('new count:', this.count );
    // }


    // let myNewHamster = new Hamster('test', 1 );
    // let myNewHamster2 = new Hamster('test2', 2 );

    // myNewHamster.eat()
    // myNewHamster2.eat()

    // myNewHamster.addCounter( 15 );
    // myNewHamster2.addCounter( 30 );

    // console.log( myNewHamster );
    // console.log( myNewHamster2 );

  /*
    В JS любая сущность является обьектом. Хорошим примером тут будут например Массивы
    Проверьте значение window.Array для лучшего понимания.

    Другими словами, они наследуют свойство constructor из своего прототипа:
  */
  
  // var x = {};
  // console.log( x )// true
  // let mySuperArray = [];
  // console.log( 'myArray to global array Obj', mySuperArray.__proto__ , Array.prototype );

  
  
