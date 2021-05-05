
/*
    ATTR
    element.hasAttribute(name) – проверяет наличие атрибута
    element.getAttribute(name) – получает значение атрибута
    element.setAttribute(name, value) – устанавливает атрибут
    element.removeAttribute(name) – удаляет атрибут
    element.attributes - получить все атрибуты
    element.dataset - > получить data-attr
*/

let MyNode = document.getElementById('TestAttribute');

// console.log( MyNode.getAttribute('name') );
// console.log( MyNode.hasAttribute('value') );
// MyNode.setAttribute('disabled', true);
// MyNode.removeAttribute('disabled');
// console.log( MyNode.attributes );

// console.log( MyNode.dataset );

// MyNode.dataset.padding = 300;
// MyNode.setAttribute('data-test', 'false'); // <- Anti-pattern

// console.log( MyNode.dataset.array );
// console.dir( MyNode );
// console.log( MyNode );

/*
	Стандартные атрибуты элементов.
	В HTML много элементов, которые имеют уникальные атрибуты.
	Большинству из них эти атрибуты можно указать напрямую
	Например:
	img = src & alt
	a = href
*/

// let a = document.createElement('a');
// 	a.href = '123';
// console.log('link with arrs:', a);

// let img = document.createElement('img');
// 	img.src = 'images/itea_logo.png'
// 	img.alt = 'some alt'

// 	img.href = 'test';
// 	img.value = "Wow! I'm a value of image";
//     img.someting = {
//         'value': true
//     }
//     img.setAttribute('someting2', {
//         'value': true
//     });

// 	console.dir( img );
// 	console.log('img with arrs:', img);
// 	console.log('img.value:', img.href, img.value);

// let input = document.createElement('input');
// 	input.value = 'test';
// 	input.placeholder = "test placeholder..."
// 	console.log('input with arrs:', input);
