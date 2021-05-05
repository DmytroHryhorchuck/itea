
/*
    Разберем немного работу с ключевым словом new
*/

function Person( name ){
    this.name = name;
};

Person.prototype.type = "human";
Person.prototype.sayMyName = function(){
    console.log(`My name is ${this.name}`);
}


let Heisenberg = new Person('Haisenberg');
    Heisenberg.sayMyName();
console.log( Heisenberg );


/*
    Что делает ключевое слово New:
*/

function OwnNew( constructor, ...data ){
    // 1. Создаем новый пустой обьект
    let obj = {};
    // 2. Прикрепляем к этом объекту прототип нашего конструктора
    Object.setPrototypeOf( obj, constructor.prototype );
    // console.log('[obj]', obj );
    // 3. Вызываем конструктор и передаем туда всю информацию
    constructor.call( obj, ...data );
    // console.log('[data]', data );
    // console.log('[obj]', obj );
    // 4. Возвращаем объект назад
    return obj;
}

let person1 = new Person("test");
person1.sayMyName();

let person2 = OwnNew( Person, "SuperDude");
person2.sayMyName();

console.log('1', person1 );
console.log('2', person2 );

/*
    Метод Object.create() создаёт новый объект с указанным прототипом
*/

let Jessie = Object.create( Person.prototype );

Jessie.name = 'test';
Jessie.sayMyName();

// console.log( Jessie2 );
