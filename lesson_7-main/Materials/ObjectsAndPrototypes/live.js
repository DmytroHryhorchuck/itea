document.addEventListener('DOMContentLoaded', () => {
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Private_class_fields

    const ROBOTS_ARMY = [];

    class Robot {
        constructor( name, speed ){
            this.name = name;
            this.speed = speed;

            this.move = this.move.bind(this);
            this.stop = this.stop.bind(this);
            
            ROBOTS_ARMY.push( this );
        }

        #privateVariable = "test"
        #privateMethod() {
            return 'hello world'
        }

        static staticProperty = "babelIsCool";
        static staticFunction = function() {
            return Robot.staticProperty;
        }; 

        move(){
            this.speed += 10;
            console.log(`Robot ${this.name} is moving with speed ${this.speed}`);
        }

        stop(){
            this.speed = 0;
            console.log(`Robot ${this.name} is stoped`, TransportRobot.#privateVariable);
        }

        render(){

            const root = document.getElementById('root');
            const node = document.createElement('div');

            node.innerHTML = `
                <h2>${this.name}</h2>
                <div>
                    <input class="_moveInput"/>
                    <button class="_moveBtn"> Move</button>
                </div>
                <button class="_stopBtn"> Stop </button>
            `;

            const moveBtn = node.querySelector('._moveBtn');
            moveBtn.addEventListener('click', this.move );
            
            const stopBtn = node.querySelector('._stopBtn');
            stopBtn.addEventListener('click', this.stop );

            root.appendChild( node );

        }

    }

    class TranslateRobot extends Robot {
        constructor( name, speed, langs ){
            super(name, speed);
            this.langs = langs;
        }

        translate( string ){
            console.log( string, string.split('').reverse().join('') );
        }

        render(){

            const root = document.getElementById('root');
            const node = document.createElement('div');

            node.innerHTML = `
                <h2 style="color:red">${this.name}</h2>
                <div>
                    <input class="_moveInput"/>
                    <button class="_moveBtn"> Move</button>
                </div>
                <button class="_stopBtn"> Stop </button>
                <button class="_translateBtn"> Translate </button>
            `;

            const moveBtn = node.querySelector('._moveBtn');
            moveBtn.addEventListener('click', this.move );
            
            const stopBtn = node.querySelector('._stopBtn');
            stopBtn.addEventListener('click', this.stop );
            
            const translateBtn = node.querySelector('._translateBtn');
            translateBtn.addEventListener('click', () => {
                this.translate( node.querySelector('._moveInput').value );
            });


            root.appendChild( node );
        }
    }   


    let TransportRobot = new Robot('R2D2', 10 );
    // TransportRobot.render();
    // TransportRobot.move( 20 );
    // TransportRobot.move( 30 );
    // TransportRobot.stop();    

    console.log( TransportRobot );

    let c3p0 = new TranslateRobot('C3PO', 10, ['ukr', 'eng']);
    // c3p0.render();
    // c3p0.move( 20 );
    // c3p0.stop();
    // c3p0.translate("Селедка");

    console.log( c3p0 );
    ROBOTS_ARMY.map( robot => robot.render() );

    /*
        Demos
    */

    console.log( Robot.isPrototypeOf( TranslateRobot ) );
    console.log( typeof( Robot ) );

    Robot.prototype.doSmsng = function(){
        console.log(123);
    }
    c3p0.doSmsng();
}); 

const Demo1 = () => {
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
}

const Demo2 = () => {

    function Hamster( name, count){
        this.name = name;
        this.count = count;
    }

    Hamster.prototype.eat = function(){
        console.log(`${this.name} eating`);
    }

    Hamster.prototype.addCounter = function( sum ){
        this.count += sum;
        console.log('new count:', this.count );
    }


    let myNewHamster = new Hamster('test', 1 );
    let myNewHamster2 = new Hamster('test2', 2 );

    myNewHamster.eat()
    myNewHamster2.eat()

    myNewHamster.addCounter( 15 );
    myNewHamster2.addCounter( 30 );



    console.log( myNewHamster );
    console.log( myNewHamster2 );
}

const Demo3 = () => {

    function Person( name ){
        this.name = name;
    };

    Person.prototype.type = "human";
    Person.prototype.sayMyName = function(){
        console.log(`My name is ${this.name}`);
    }

    function OwnNew( constructor, ...data ){
        // 1.
        let obj = {};
        // 2.
        Object.setPrototypeOf( obj, constructor.prototype );
        // console.log('[obj]', obj );
        // 3.
        constructor.call( obj, ...data );
        // console.log('[data]', data );
        // console.log('[obj]', obj );
        // 4.
        return obj;
    }

    let person1 = new Person("test");
    person1.sayMyName();
    
    let person2 = OwnNew( Person, "SuperDude");
    person2.sayMyName();

    console.log('1', person1 );
    console.log('2', person2 );

}

const Demo4 = () => {
        
    function Robot( name, speed ){
        this.name = name;
        this.speed = speed;
        Robot.instances.push( this );
    }
    Robot.instances = [];


    Robot.prototype.move = function( speed ){
        this.speed += speed;
        console.log(`Robot ${this.name} is moving with speed ${this.speed}`);
    }
    Robot.prototype.stop = function(){
        this.speed = 0;
        console.log(`Robot ${this.name} is stoped`);
    }

    let TransportRobot = new Robot('R2D2', 10 );

    TransportRobot.move( 20 );
    TransportRobot.move( 30 );
    TransportRobot.stop();

    function TranslateRobot( name, speed, langs ){
        Robot.call( this, name, speed );
        this.langs = langs;
    }

    TranslateRobot.prototype = Object.create( Robot.prototype )

    TranslateRobot.prototype.translate = function( string ){
        console.log( string.split('').reverse().join('') );
    }


    let c3p0 = new TranslateRobot('C3PO', 10, ['ukr', 'eng']);
    c3p0.move( 20 );
    c3p0.stop();
    c3p0.translate("Селедка");


    console.log( c3p0 );
    console.log( Robot.instances );
}