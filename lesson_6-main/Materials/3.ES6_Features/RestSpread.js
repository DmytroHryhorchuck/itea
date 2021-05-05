
/*
    REST and Spread Operator
    ...state, ...props
*/

  // in Function ->
  // function RestTest(a, b, c,  ...props){
  //   console.log('a:', a, 'b', b, 'c', c,  'props', props);
  //   props.map( item => console.log( 'map rest props', item ) );
  // }

  // RestTest(0, 1, 2, 4, 5);
  // RestTest(6, 7, 8, 9, 0,'f')

  // // In array:
  // let iterableObj = ['i','t','e'];
  // let iterableObj2 = ['d','d','a'];
  // let restArray = [ '4', 'five', 6, ...iterableObj, ...iterableObj2];
  // console.log( 'rest in array:', restArray);

  // const testArr = [1,2,3,4];
  // const reverse = [...testArr].reverse();
  // console.log( testArr, reverse)

  // concat arrays: old way;
  // let arr1 = [0, 1, 2];
  // let arr2 = [3, 4, 5];
  // let arr3 = [6, 7, 8];
  // Append all items from arr2 onto arr1
  // arr1 = arr1.concat(arr2);
  // arr1 = arr1.concat(arr3);
  // new way:
  // let arr4 = [ ...arr1, ...arr2, ...arr3 ];
  // console.log(  arr1, arr4 );

//...
// In obj
let DataObj = {
  data1: 'data1',
  data2: 'data2'
};
let DataObj2 = {
  data3: 'data3',
  data4: 'data4'
};
let obj = { value: 1};
let objClone = { 
  ...obj,
  ...DataObj 
};
console.log( 'objClone', objClone );

let testObj1 = {
  data: {
    name: '123',
    value: '333',
    tet1: '123',
    tet2: '222',
    tet3: '333',
  },
  image: 'url',
  test: true
}
console.log( 'start:', testObj1 );

// let testObj2 = {
//   ...testObj1,
//   data: {
//     ...testObj1.data,
//     value: 123123123123,
//     tet1: 'WOOHOOO'
//   },
//   test: false
// }

// console.log( 'second:', testObj2 );

// let testObj3 = {
//   ...testObj2,
//   data: {
//     ...testObj2.data,
//     tet3: null
//   }
// }

// console.log(
//   testObj1,
//   testObj2,
//   testObj3
// );

// Loading statuses
let data = {
  loaded: false,
  loading: false,
  data: {},
  error: null
}

let firstLoading = {
  ...data,
  loading: true,
  loaded: false
}

console.log(data, firstLoading);

let newData = {
  ...firstLoading,
  data: {
    test: '123'
  },
  loaded: true,
  loading: false
}
console.log( newData );
