/*
	Синтаксис:
	Object.defineProperty(obj, prop, descriptor)

	obj - Объект, в котором объявляется свойство.
	prop - Имя свойства, которое нужно объявить или модифицировать.
	descriptor - Дескриптор – объект, который описывает поведение свойства
*/

	let MyObj = {
		first: "Jonh",
		func: function(){
			return this.first;
		}
	};

	Object.defineProperty(
		MyObj,
		"last",
		{	
			/*
				value – значение свойства, по умолчанию undefined
			*/
			value: "Шевченко",
			/*
				configurable – если true, то свойство можно удалять, а также менять его
				в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.
			*/
			// configurable: true,
			/*
				writable – значение свойства можно менять, если true. По умолчанию false.
			*/
			// writable: false,
			/*
				enumerable – если true, то свойство просматривается в цикле for..in и
				методе Object.keys(). По умолчанию false.
			*/
			// enumerable: false,
			/* get – функция, которая возвращает значение свойства. По умолчанию undefined. */
			// get: () => { console.log( 'getter'); },
			/* set – функция, которая записывает значение свойства. По умолчанию undefined. */
			// set: () => { console.log( 'setter'); }
	});

	console.log( MyObj );

	/*
		Writable demo
	*/	
	// MyObj.name = 10;
	// MyObj.name

	/*
		Configurable demo
	*/
	// delete MyObj.name;

	/*
		Enumerable demo
	*/
	// for(let key in MyObj) console.log(key);
	// console.log( Object.keys(MyObj) );


	/*
		Object.defineProperty можно вызвать уже после обьявления
	*/
	Object.defineProperty(
		MyObj, 
		"func", 
		{
			enumerable: false,
			writable: false 
		}
	); 

		
	/*
		Getter Demo:
	*/
	Object.defineProperty(MyObj, "fullName", {
		get: function() {
			return `${this.first} ${this.last}`;
		}
	});
		
	console.log('FullName getter:', MyObj.fullName );
	console.log( MyObj );
	
	/*
		Getter and Setter Demo:
	*/

	let Sizes = {
		_ObjHeight: 0
	};

	Object.defineProperty(Sizes, "height", {
		get: function() {
			return `${this._ObjHeight} cm`;
		},
		set: function( value ){
			Object.defineProperty( Sizes, "_ObjHeight", { writable: true });
			this._ObjHeight = value;
			Object.defineProperty( Sizes, "_ObjHeight", { writable: false });
			console.log( '[Height setted]:', this._ObjHeight );
		}
	});
				
	Sizes.height = 20;
	Sizes._ObjHeight = 55;
	// console.log( Sizes, Sizes._ObjHeight );
	// console.log( Sizes.height );
	// console.log( Sizes );

	/*
		Короткий синтаксис геттеров
	*/

	let obj = {
		foo: 1,
		get bar() {
			// Get bet
			return this.foo;
		},
		set bar( value ){
			// Set Bar
			this.foo = value;
		}
	};

	console.log( obj.bar );
	obj.bar = 12;
	console.log( obj );
