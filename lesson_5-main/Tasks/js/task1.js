/*

    Задание 1:

    Написать объект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

let train = {
  name: "interCity",
  speed: 80,
  passengersAmount: 40,
  going: function () {
    console.log(
      `The train ${this.name} carries ${this.passengersAmount} passengers with speed ${this.speed} km/h.`
    );
  },
  stay: function (currentSpeed) {
    this.speed = currentSpeed;
    console.log(`The train ${this.name} stoped. Speed is ${this.speed} km/h.`);
  },
  pickedUpPassengers: function (passengers) {
    this.passengersAmount += passengers;
    console.log(`Current amount of passengers is ${this.passengersAmount}`);
  },
};
train.going();
train.stay(0);
train.pickedUpPassengers(5);
