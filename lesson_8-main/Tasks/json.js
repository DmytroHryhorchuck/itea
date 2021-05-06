const convertToJsonForm = document.getElementById('convertToJsonForm')
const convertFromJsonForm = document.getElementById('convertFromJsonForm')
const convertToJsonFormInputs = convertToJsonForm.querySelectorAll('input')
const convertToJsonFormButton = convertToJsonForm.querySelector('button')
const convertFromJsonFormButton = convertFromJsonForm.querySelector('button')
const convertFromJsonFormInput = convertFromJsonForm.querySelector('input')

const dataObj = {};

const getJsonData = () => {
  convertToJsonFormInputs.forEach((input)=>{
 dataObj[`${input.name}`] = input.value
  })
const jsonData = JSON.stringify(dataObj);
convertFromJsonFormInput.value = jsonData;
console.log(jsonData)
return jsonData
}

convertToJsonFormButton.addEventListener('click', (e)=>{
  e.preventDefault()
    getJsonData() 
})

const getObjFromJson = (jsonData) => {
  console.log(JSON.parse(jsonData))
}

convertFromJsonForm.addEventListener('click', (e)=>{
  e.preventDefault()
  getObjFromJson(getJsonData())
})



/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'


*/
