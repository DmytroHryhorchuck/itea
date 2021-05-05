/*

    Задание 3:

    1. Создать ф-ю конструктор которая создаст новую собаку у которой есть имя и порода
    2. Объект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства


    Dog {
      name: '',
      breed: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    Перебор свойств и методов объекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    }
*/

class Dog {
  constructor(name, breed, status) {
    this.name = name;
    this.breed = breed;
    this.status = "Dog staying";
    this.changeStatus = function (status) {
      this.status = status;
    };
    this.showProps = function () {
      for (let key in this) {
        console.log(key, this[key]);
      }
    };
  }
}

let Dog1 = new Dog("Chappy", "Duberman");
Dog1.changeStatus("Eating");
Dog1.showProps();
