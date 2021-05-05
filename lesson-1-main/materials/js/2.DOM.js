
/*

	Document Object Model
	DOM нужен для того, чтобы манипулировать страницей –
	читать информацию из HTML, создавать и изменять элементы.

	Всё, что есть в HTML, находится и в DOM. 
*/

/*
	document.getElementById -> вызывается только в контексте document
	возвращает выбранный элемент по id.
*/

// let testNode = document.getElementById('test');
// testNode.style.background = "blue";
// testNode.innerText = "test";
// console.dir(testNode);

/*
	! Когда мы объявляем id в HTML, в нашем глобальном объекте window
	создается объект где хранится ссылка на нашу ноду.
	По этому поиск по ид самый быстрый поиск в дом дереве.
	(Demo в браузере)
*/

// let testElement = document.getElementById('test22');
// let list = null;
// let test = {};
// testElement.style.background = "red";
// list.style.color = "blue";
// console.log( testElement );
/*	
	Ссылки на постоянные HTML элементы:
*/
// console.log( document.body );
// console.log( document.head );
// document.body.style.background = "red";

/*
	Следующие селекторы возвращают коллекцию могут быть вызваны в контексте
	как документа как и любого элемента.

	Коллекция это не массив и нативными методами для работы с массивами её перебрать нельзя!

	element.getElementsByTagName
	element.getElementsByClassName

*/

// let app = document.getElementById('app');
// let showBlocks = app.getElementsByClassName('show');
// console.log( showBlocks );

/*
	Array.from( obj ) - преобразовывает массивоподобные объекты и коллекции в массивы
*/
// showBlocks = Array.from( showBlocks );
// console.log(showBlocks);
// showBlocks.forEach( function(item){ console.log(item);}); //Error!

/*
	Выбрать элементы по тегу li -> в элементе с id=List
*/
// let list = document.getElementById('list')
// let listItems = list.getElementsByTagName('li');
// listItems[0].style.background = "green";
// console.log('listItems', listItems);

/*
	Выборка элементов по css селектору.
	element.querySelectorAll(css) -> где css любой css selector, вернет коллекцию (Node List)
	element.querySelector(css) -> вернет первое совпадение

*/

// let getById = document.getElementById('test');
// let getByCss = document.querySelector('#test');
// let getByCssAll = document.querySelectorAll('#list li');
// console.log( getById, getByCss, getByCssAll);

// getByCssAll.forEach( function( item ){
// 	console.log( item );
// });

// let list1 = document.getElementById('list');
// let res1 = list1.querySelector('#test > p .show[data-test="2"]');
// let res2 = list1.querySelectorAll('li');

// console.log('res', res1, res2);

/*
	Выборка по css селектору
*/

// let listItems = document.getElementById('list');
// let queryFirstItem = listItems.querySelector('.test');
//     console.log( 'querySelector', queryFirstItem );

// let queryItems = listItems.querySelectorAll('.test');
//     console.log( 'querySelectorAll', queryItems );

/*
	Проверка элемента по селектору
	element.matches(css) -> проверка, удовлетворяет ли селектору css, возвращает boolean
*/

// let matchNode = document.getElementById('test');
// console.log( 'matches', matchNode, matchNode.matches('.show2 .test') );

/*
	Найти ближайшего родителя, метод closest
	element.closest(css) -> находит ближайший элемент вверх по иерархии DOM который удовлетворяет css

*/

// let ClosestItems = document.getElementById('JackLi');
// console.log( 'closest', ClosestItems.closest('.container'));

/*
	Выборка по атрибуту Name. Возвращает коллекцию (Node List)
	* Это устаревший метод, используйте более новые аналоги.
*/
// let getByName = document.getElementsByName('block');
// console.log('getByName', getByName);

// let nameItem = document.getElementsByName('Dexter');
// console.log( 'getByName', nameItem );

/*
	element.children - вернет только дочерние узлы элементы (теги)
	element.childNodes, - вернет все дочерние элементы включая текстовыеНоды
	element.firstChild, - вернет первый дочерний элемент
	element.lastChild - вернет последний дочерний элемент
*/

// let ChildElement = document.getElementById('list');
// console.log('children', ChildElement.children );
// console.log('childNodes', ChildElement.childNodes );
// console.log('firstChild', ChildElement.firstChild );
// console.log('lastChild', ChildElement.lastChild );

// console.log( ChildElement );