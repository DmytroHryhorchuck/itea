/*

    Формат JSON.

    JSON (JavaScript Object Notation)
    JSON.parse();
        Разбирает строку JSON, возможно с преобразованием получаемого значения и его свойств и возвращает разобранное значение.
        https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    JSON.stringify()
        Возвращает строку JSON, соответствующую указанному значени.
        https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

*/

    let someUser = {
        first: "John",
        last: 'Doe',
        jobTitle: `Developer`,
        age: 30,
        doSmsng: function(){
            console.log('Write Some Code');
        }
    };
    console.log( someUser );

    let someUserString = JSON.stringify(someUser);
    console.log('Strigified Obj', someUserString);
    
    let myJSON = '{"name":"Jane"}';
    Jane = JSON.parse(myJSON);
    console.log(Jane);
    Jane.age = "23";

    let AJAX_DATA = JSON.stringify(Jane);
        console.log(AJAX_DATA);

/*
    JSON является синтаксисом для сериализации объектов, массивов, чисел, строк логических значений и значения nul
    т.е JSON работает со следущими типами данных:
    - Object : {}
    - Array : []
    - Number : 12
    - String : ""
    - Boolen : true
    - null

    Особености:
    1) Передает только данные
    2) Именна свойств должны быть строками заключенными в двойные кавычки
*/