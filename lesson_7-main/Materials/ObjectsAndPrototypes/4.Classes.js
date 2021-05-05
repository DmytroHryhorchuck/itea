/*
	Давайте разберемся что такое класс в других языках программирования.
	"Класс — это элемент ПО, описывающий абстрактный тип данных и его частичную или полную реализацию" © Википедия
	И давайте попробуем реализовать простой класс в JS

	1. Создаидм функцию конструтор Robot в которой указывается имя и скорость нового робота.
	2. Зададим ему через прототип два метода - move, stop.
	3. Создадим нового робота

	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Private_class_fields
*/

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

	/*
		Проверили - вроде все работает как надо.
		Попробуем унаследовать классы этого робота, который умеет только двигаться следующим роботом.
		А так же добавим ему новый метод 'translate'
	*/

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

	/*
		Отрефакторим код переписав его на Классы.
	*/

	class Robot {
		constructor( name, speed ){
			this.name = name;
			this.speed = speed;

			this.move = this.move.bind(this);
			this.stop = this.stop.bind(this);
			
			ROBOTS_ARMY.push( this );
		}

		/*
			Приватные  методы и свойства которые пока лучше не использовать
			Но которые уже есть в спецификации.
		*/
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

	/*
		Дальше создадим extended Class:
	*/

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

	let c3p0 = new TranslateRobot('C3PO', 10, ['ukr', 'eng']);
    c3p0.render();
    c3p0.move( 20 );
    c3p0.stop();
    c3p0.translate("Селедка");

	/*
		Простая истина: Классов, как отдельной самостоятельной сущности в JS не существует.
		В данной реализации, это просто синтаксический сахар над прототипным наследованием. Проверим это.
	*/

	let ClassCheck = typeof( TranslateRobot );
	console.log( ClassCheck ); // function

	/* Попробуем достать метод через прототип */
	console.log( TranslateRobot.prototype.stop ); // function -> BOOM!
	console.log( TranslateRobot.prototype ); //

	/*
		Сделаем немного магии.
		Попробуем смешать методы и добавить к "класу" через прототпы метод:
	*/

	Robot.prototype.doSmsng = function(){
        console.log(123);
    }
    c3p0.doSmsng();

	// console.log( ROBOTS_ARMY ); 

	// ROBOTS_ARMY.map( item => item.render() );