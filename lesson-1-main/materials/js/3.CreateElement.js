let createArea = document.getElementById('createArea');
/*
	CREATE ELEMENT
	document.createElement(tag) – создает элемент
	document.createTextNode(value) – создает текстовый узел
*/

// let textElem = document.createTextNode('I\'m pasted element');
// console.log('myTextNode:', textElem);

// let node = document.createElement('div');
// 	node.className = "create-element pasted";
// 	node.innerText = "status";
// 	node.style.backgroundColor = '#93ce78';

// console.log('MyDiElement:', node);

/*
	PASTE ELEMENT
	parent.appendChild(element)
	parent.insertBefore(element, nextSibling)
*/

// createArea.appendChild(node)
// createArea.insertBefore( textElem, node );

/*
	REMOVE ELEMENT

	parentElement.removeChild(element);
	element.remove();
*/

// let deletedElement = document.getElementById('JackLi');
    // deletedElement.remove();

// console.log( deletedElement );

// let list = document.getElementById('list');
//     list.removeChild(deletedElement);

/*
	При создании элементов, не добавляйте их сразу в DOM.
	Это ресурсоемкий процесс, который потребляет ресурсы. Собирайте ваши элементы
	в памяти браузера и только когда он будет готов - вставляйте в DOM дерево.
*/

// let div = document.createElement('div');
// let header = document.createElement('header');
// let link = document.createElement('a');
// link.innerText = 'Link';
// link.href = "http://google.com.ua";

// div.appendChild(header);
// header.appendChild(link);
// createArea.appendChild(div);