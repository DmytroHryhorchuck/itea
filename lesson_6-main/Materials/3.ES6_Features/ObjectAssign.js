
  /*
    Object.assign
    syntax: Object.assign(target, ...sources)
  */

  // не коментить DataObj
  let DataObj = {
    data1: 'data1',
    data2: 'data2'
  };
  let DataObj2 = {
    data3: 'data3',
    data4: 'data4'
  };

  // - - - - - - - -
  
  // let firstAssign = Object.assign(DataObj, DataObj2);
  // console.log('firstAssign', firstAssign);
  // console.log('DataObj', DataObj);
  // Изменяем значение исходного обьекта и проверяем значения обеих
  // DataObj.data5 = 'data5';
  // console.log('DataObj', DataObj);
  // console.log('firstAssign', firstAssign);

  // - - - - - - - -

  // IMMUTABLE ASSIGN
  // let secondAssign = Object.assign({}, DataObj, DataObj2 );
  // console.log( 'secondAssign', secondAssign );
  // DataObj.data6 = 'data6';
  // console.log('DataObj - secondAssign', DataObj);
  // console.log('secondAssign', secondAssign);

  // - - - - - - - -
  // let FunctionalObj = {
  //   x: () => {
  //     console.log('some important stuff');
  //   },
  //   y: {
  //     a: 'a',
  //     b: 'b',
  //     c: 'c'
  //   }
  // };
  // let thirdAssign = Object.assign({}, FunctionalObj, DataObj);
  // console.log('3', thirdAssign );
  // thirdAssign.x();

  // - - - - - - - -
  // convert to obj
  // let v1 = 'abcfadfsdfsds';
  // let v2 = true;
  // let v3 = 10;
  // let v4 = { value : true };
  // let v5 = [{text: 'test'}, {text: 'test2'}]
  // //
  // let obj = Object.assign(
  //   {},
  //   // v1,   // разберет посимвольно индекс-буква
  //   // null, // -> ignore
  //   // v2,   // -> ignore
  //   // undefined,  // -> ignore
  //   // v3,   // -> ignore
  //   v4,    // внесет в обьект,
  //   // v5
  // );
  // console.log(obj);

  // - - - - - - - -

  // let obj = {
  //   foo: 1,
  //   get bar() {
  //     return 2;
  //   }
  // };

  // obj.value = '';
  // При попытке скопировать значение с геттером, получим только его value
  // var copy = Object.assign({}, obj);
  // console.log(copy);

  // - - - - - - - -

  // let newData = {
  //   data2: 'new 2',
  //   data3: 'new 1',
  // };
  // let targetObj = Object.assign({}, DataObj, newData);
  // console.log( targetObj );
