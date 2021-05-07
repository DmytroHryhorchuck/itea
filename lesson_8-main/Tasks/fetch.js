const responsToJson = (respons) => {
return respons.json();
}

const getAndRenderObj = (response1, response2) => {
  const manObj = {
    name: response1.name,
    company: response1.company,
    gender: response1.gender,
    friends: response2[0].friends
   }
   let man = document.createElement('div');
   man.innerHTML = `1. Name - ${manObj.name} <br> 2. Company - ${manObj.company} <br> 3. Gender - ${manObj.gender} <br> 4. Friends: - ${manObj.friends.map(friend => ` ${friend.name}`)}`
   document.body.appendChild(man)
}

const getRandomMan = (response) => {
  return response[Math.floor(Math.random()*response.length)];
}

fetch('http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2')
  .then((response1) => {
   return responsToJson(response1)
  })
  .then((response1) => {
    return getRandomMan(response1)
  })
  .then((response1) => {
    return response1})
    .then(
      response1 => {
        return fetch('http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2')
          .then(
            response2 => {
              return responsToJson(response2)
            }).then((response2) => {
              getAndRenderObj(response1, response2)
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
