
    /*
      Objects in JS
    */


    /*
      Что являеться обьектом в JavaScript
    */

    function getTypeAndLogIt( variable ){
      console.log( 'variable', variable, typeof(variable) );
    }

    var string = 'String';
    var number = 12;
    var fn = function(){};
    var und = undefined;
    var nu = null;
    var array = [];
    var obj = {};

    // getTypeAndLogIt(string);
    // getTypeAndLogIt(number);
    // getTypeAndLogIt(und);
    // getTypeAndLogIt(fn);

    // getTypeAndLogIt(nu);      // null is -> obj
    // getTypeAndLogIt(array);   // array is -> obj
    // getTypeAndLogIt(obj);     // obj is -> obj

    /*
      Пример обычного обьекта в JavaScript с которым мы будем работать.
      Имеет свои свойства и методы.
    */
    let DemoObject = {
      id: 213,                     // свойство обьекта
      someAction: function(){}     // Метод обьекта
    }

    /*
      Создать обьект можно 2 способами:
    */

    let Demo1 = new Object(); // Считается антипаттерном
    let Demo2 = {}; // <-- Более короткий вариант, де факто, стандарт на сегодня.

    console.log( Demo1, Demo2 );

    /*
      Присвоение свойств и методов
    */

    // Более динамический вариант, когда значение присваивается по ключу (может использоваться например в ф-ях)
    let myObj = {};
        myObj.name = "Cat";
        myObj.sound = "Hello";
        myObj.sayName = function(){
          console.log( this.sound + ' my name is ' + this.name);
        }
        
        myObj.sayName();
        console.log('Dynamic Obj', myObj  );


    // Статический вариант объявления обьекта (например обьект с конфигурацией)
    let staticObject = {
        images: ['...', '...', '...'],
        rotate: true,
        arrows: false
    };      
    // console.log('staticObject', staticObject)


    // console.log( staticObject.rotate )


    let someVariable = "talk";
    var cat = {};
        // cat.someVariable = "Dance-Dance-Dance"; // cat.someVariable -> Dance-Dance-Dance
        cat[someVariable] = "Dance-Dance-Dance"
    // console.log( 'cat after cat[variable]', cat );



    let testAttr = 'says';
    // // 
    // // присвоение свойств
    cat.number = 12;
    cat.sound = testAttr;
    cat.method = function(){};
    // Можем присваивать вложенные обьекты
    cat.test = {
      value: 1,
      obj: {
        name: 123
      }
    };
    // console.log( 'cat.test.obj.name', cat, cat.test.obj.name );

    /*
      У обьекта как у примитива есть несколько методов которые мы можем использовать:
    */
    
    // Object.keys() - Возвращает все ключи обьекта
    let catKeys = Object.keys(cat);
    console.log( 'catKeys', catKeys );

    // Object.values() - Возвращает все значения из обьекта   
    var catValues = Object.values(cat);
    console.log( 'catValues', catValues);

    // Обьект можно перебрать при помощи for и конструкции for( key in obj){}
    for (let key in cat) {
    //   /* ... делать что-то с obj[key] ... */
      console.log('cat prop:', key, cat[ key ] );
    }
