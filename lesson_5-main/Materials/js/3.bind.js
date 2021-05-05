

    /*
      call, bind, apply

      Apply:
        fun.call(thisArg, a, b, c);
        fun.apply(thisArg, [argsArray]);
        fun.bind(thisArg, a, b, c);
    */

    function add( c, d ) {
      console.log('[context]', this, arguments);
      console.log('[sum]', this.a + this.b + c + d );
    }
    
    // add(3,4); //NaN

    let ten = {
      a: 1,
      b: 2,
    };

    // add.call(ten, 3, 4); // 10
  
    let x = [ 1, 2, 3, 4 ];
    // add.apply( ten, x);

    //...

    // function Product(name, price) {
    //   this.name = name;
    //   this.price = price;
    
    //   if (price < 0) {
    //     throw RangeError('Cannot create product ' + this.name + ' with a negative price');
    //   }
    // }
    
    // function Food(name, price) {
    //   Product.call(this, name, price);
    //   this.category = 'food';
    // }

    // function Toy(name, price) {
    //   Product.call(this, name, price);
    //   this.category = 'toy';
    // }

    // let phone = new Product('Phone', 1000);
    // let cheese = new Food('feta', 10);
    // let fun = new Toy('robot', 40);

    // console.log( phone );
    // console.log( cheese, fun );


    /*
      Bind
    */

// //
//   let meowButton = document.getElementById('meowButton');
//       // console.log( meowButton );

//   let myObj = {
//     sound: 'Guten Morgen',
//     talk: function(){
//       console.log('myObj', this, this.sound );
//     }
//   }

//   myObj.talk();
//   let bindedTalk = myObj.talk.bind(myObj);

//   meowButton.addEventListener( 'click', bindedTalk );


//   let vampire = {
//     sound: 'grrrr'
//   }

//   let Sasha = { 
//     name: 'Sasha', 
//     sound: 'Sasha say hello!'
//   };

//   let bindedSahsa = myObj.talk.bind(Sasha);
//   testBtn.addEventListener('click', bindedSahsa);

  /*
    Частичный вызов функции
  */

    function hardCarrying(a,b,c,d,e){
      console.log( arguments )
      console.log( a,b,c,d,e );
    }
    let simpeFunc = hardCarrying.bind( null, 1,2,3,4);
    simpeFunc(15);
  
    function SimlpleFunc( a, b, message ){
      console.log(  a, b, message, this );
    }
    const SimpleCarrying = SimlpleFunc.bind(null, 1);

    let context = { test: true }
    let TestFunc = SimlpleFunc.bind(context, 1, 2, "test");

    SimlpleFunc(5, 6, 'bye')
    SimpleCarrying(6, 'hello');
    TestFunc();

    function ManyArgyments( another, brick, in_the, wall){
      console.log('ManyArgyments', another, brick, in_the, wall);
    }
    
    let CarryingFunc = ManyArgyments.bind(null, 'We', 'don\'t', 'need', 'no education');
    CarryingFunc();