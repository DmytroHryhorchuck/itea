/*
  Arrays Methods
  Docs:

    * Array.find: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    * Array.findIndex: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    
*/

  const ITEA_COURSES = ["Курс HTML & CSS", "Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", "React.js", "React Native", "Node.js", "Vue.js"];
  const NOT_ARRAY = "";

  // console.log( ITEA_COURSES );
  /*  
    Array.isArray: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    Array.isArray();
    Проверка является ли массивом: Array.isArray( Arr );
  */

  // console.log( "Is ITEA_COURSES array?", Array.isArray(ITEA_COURSES) );
  // console.log( "Is NOT_ARRAY array?", Array.isArray(NOT_ARRAY) );

  /*
    Array.indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  */

  // let index = ITEA_COURSES.indexOf('JavaScript базовый курс');
  // console.log( 'indexOf', index );

  /*
      Array.forEach: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
      Array.forEach( fn );
  */
  
  // const LogName = ( item, key ) => console.log( 'log:', key, item );
  // ITEA_COURSES.forEach( LogName );
  // console.log('- - - - -');
  
  // ITEA_COURSES.forEach( function( item, i){
  //   console.log('log2:', i, item );
  // });
  // console.log('- - - - -');

  // ITEA_COURSES.forEach( (item, index, array)=> {
  //   console.log('log3:', index, item );
  // });

  /*
    Immutable => 
      a = [ 1, 2, 3 ] => b [ 3, 4, 5 ];
      a = [ 3, 4, 5 ]
  */

  /*
    Array.filter( fn ) *Create new array;
    Array.filter: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

    function( item, index ){
      if( expression ){
        return true;
      } else {
        return false;
      }
    }
    
    if expresion === true return item

  */

  // const ObjArray = [
  //   {id:0, name: 'test'},
  //   {id:1, name: 'test123'},
  //   {id:2, name: 'test123132'},
  // ];

  // const CourseLength = item => item.length > 13;
  // const stringLength = item => item.name.length > 5
  // const removeElement = item => item.id !== 2;


  // let filtredCourses = ITEA_COURSES.filter(CourseLength);
  // console.log('filtredCourses:', filtredCourses);

  // let filtredArray = ObjArray.filter(stringLength);
  // console.log('objArray', ObjArray, filtredArray );

  // let removedArray = ObjArray.filter(removeElement);
  // console.log('removedArray', ObjArray, removedArray );


  /*
    Array.map( fn ) *Create new array;
    Array.map: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */

  // const ReverseName = ( item, key ) => {
  //     if( key === 3){
  //       return item.split('').reverse().join('');
  //     } else{
  //       return item;
  //     }
  // };

  // const ConvertToObject = ( item, key ) => ({
  //     id: key,
  //     name: item
  // });

  // const RenderToDom = ( item ) => {
  //     const Node = document.createElement('div');
  //     Node.innerHTML = item;
  //     document.body.appendChild( Node );
  // } 

  // const ConvertToLength = item => item.length;


  // let MappedArray = ITEA_COURSES.map(ConvertToLength);
  // console.log(MappedArray, ITEA_COURSES);

  
  /*
    Array.reverse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
  */
  // let normalArray = [1,2,3];
  // let reversedArray = normalArray.reverse();
  // console.log( 'normalArray', normalArray, 'reversedArray', reversedArray )

  /*
    Array.every/some
    arr.some( fn );

    Array.some: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    Array.every: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  
    [1, 4, 6] -> arr.some( item => item < 3 );
    [true, false, false] => true

    [1, 4, 6] -> arr.every( item => item < 3)
    [true, false, false] => false

    [1, 4, 6] -> arr.every( item => item < 7)
    [true, true, true] => true
  
  */

  // const LessThen8 = item => item.length < 3;
  // let ArraySome = ITEA_COURSES.some(LessThen8);
  // console.log('ArraySome', ArraySome);

  // // [1,2,3] => arr.some( () => i === 4 ) -> true
  // let ArrayEvery = ITEA_COURSES.every( item => item.length < 32);
  // console.log('ArrayEvery', ArrayEvery);

  // - - - - - - - 0 - - - 

  /*
    Array.sort: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    arr.sort([compareFunction])

    По умолчани сортирует по Unicode таблице.
    Формула сортировки:
    
    function compare(a, b) {
      if (a меньше b по некоторому критерию сортировки) {
        return -1;
      }
      if (a больше b по некоторому критерию сортировки) {
        return 1;
      }
      // a должно быть равным b
      return 0;
    }
  */

  // let sortedCources = [...ITEA_COURSES].sort();

  // console.log( 'start:', ITEA_COURSES, 'sorted:', sortedCources)

  // let nums = [1, 2, 10, 21, 32, 43, 54, 77, 99, 125];
  //     nums.sort();
  // console.log( 'Sorted Nums (default)', nums );

  // const compareIncrease = (a, b) => a - b;
  // nums.sort( compareIncrease );
  // console.log( 'Sorted Nums(increase)', nums );

  // const compareDescending = (a, b) => {
  //   // console.log('a', a, 'b', b);
  //   return b - a;
  // };
  // nums.sort( compareDescending );
  // console.log( 'Sorted Nums(descending)', nums );

  // const items = [
  //   { name: 'Edward', value: 21 },
  //   { name: 'Sharpe', value: 37 },
  //   { name: 'And', value: 45 },
  //   { name: 'The', value: -15 },
  //   { name: 'Magnetic', value: -55 },
  //   { name: 'Zeros', value: 37 }
  // ];

  let sortedItems = items.sort(function (a, b) {
    console.log('compare iteration:', a, b );
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });

  // console.log('sortedItems:', sortedItems);

  /*
    Array.reduce: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    reduce/reduceRight
  */

  // const REDUCE_ARRAY = [1,2,3,4,5,6,7,8,9,10];
  // const REDUCE_ARRAY2 = [
  //   { id: 0, name: '01044'},
  //   { id: 1, name: 'Киев'},
  //   { id: 2, name: 'Украина'},
  //   { id: 3, name: 'ул. Смоленская 31'}
  // ];

  // let result = REDUCE_ARRAY.reduce( (sum, item ) => {
  //     console.log( sum, item )
  //     return sum + item;
  // }, 100 );
  // console.log('Result sum:',result);

  // let address = REDUCE_ARRAY2.reduceRight( (current, next) => {
  //   console.log( current, next)
  //   return current + ' ' + next.name;
  // }, '');
  // console.log( address );

  // const REDUCE_CART = [
  //   {id:1, name: 'aa', price: 10},
  //   {id:2, name: 'bb', price: 15},
  //   {id:3, name: 'cc', price: 25},
  //   {id:4, name: 'dd', price: 33},
  // ];

  // let cartSum = REDUCE_CART.reduce( (current, next ) => current + next.price , 0);

  // console.log('cartSum', cartSum)