function Car( name ){
  let speed = 200;
  this.name = name;

  this.doSmsng = function(){
      console.log( '[This]', this );
      console.log( '[Speed]', speed );
  }

  const changeName = ( name ) => {
      this.name = name;
  }

  this.publicChangeName = function( name ){
      if( name.length > 5 ){
          changeName( name );
      }
  }
}

let super_car = new Car('Mazda');

super_car.doSmsng()
super_car.publicChangeName('Suzuki');

//.
console.log( super_car );