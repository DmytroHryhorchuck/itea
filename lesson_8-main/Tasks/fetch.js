fetch('http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2')
  .then((response1) => {
    return response1.json();
  })
  .then((data) => {
    return data[Math.floor(Math.random()*data.length)];
  })
  .then((man) => {
    return man})
    .then(
      man => {
        return fetch('http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2')
          .then(
            freands => {
          return freands.json()
            }).then((freands) => {
              console.log(man, freands )
            })
      }
    )
   


/*

  Задача:

  1. При помощи fetch получить данные:
    http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
    http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
    И дальше передать обьект:

      {
        name: userName,
        company: userCompany,
        gender: userGender,
        ...
        friends: friendsData
      }

    Подсказка нужно вызвать дополнительный fecth из текущего чейна.
    Для того что бы передать результат выполнения доп. запроса
    в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/
