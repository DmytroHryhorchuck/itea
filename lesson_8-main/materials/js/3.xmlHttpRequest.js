document.addEventListener('DOMContentLoaded', () => {

    /*
        Asynchronous Javascript And Xml
        Demo 1:
    */

    // let getUsersUrl = "http://www.json-generator.com/api/json/get/bTvshRCyPS?indent=2";
    // 1. Создаём новый объект XMLHttpRequest
    // let xhr = new XMLHttpRequest();
    // 2. Настраиваем метод open
    // xhr.open(method, URL, async, user, password)
    // xhr.open('POST', getUsersUrl, false);
    // 3. Отсылаем запрос
    // xhr.send();
    // Нас интересует 3 параметра: xhr.status, xhr.statusText, xhr.responseText
    // 4. Если код ответа сервера не 200, то это скорее всего ошибка
    // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    // if (xhr.status !== 200) {
    // Обработаем ошибку
        // console.log( xhr.status, xhr.statusText ); // пример вывода: 404: Not Found
    // } else {
    //     // console.log( xhr, xhr.responseText );
    //     // вывести результат
    //     var myResponse = JSON.parse(xhr.responseText);
    //     console.log(myResponse); // responseText -- текст ответа.
    //     myResponse.map( item => console.log(item.name) )
    // }

    /*
        Demo 2:
    */

    const myUploadForm = document.forms.upload;
    myUploadForm.onsubmit = function(e){
        e.preventDefault();
        let input = myUploadForm.elements.myfile;
        let file = input.files[0];
        if (file) {
            upload(file);
        }
        return false;
    }

    const upload = (file) => {
        let xhr = new XMLHttpRequest();
        console.log('xhr', xhr, file );

        xhr.addEventListener('readystatechange', (e) => {
            /*
                Значение	Состояние	           Описание
                0	        UNSENT	             Объект был создан. Метод open() ещё не вызывался.
                1	        OPENED	             Метод open() был вызван.
                2	        HEADERS_RECEIVED	   Метод send() был вызван, доступны заголовки (headers) и статус.
                3	        LOADING	             Загрузка; responseText содержит частичные данные.
                4	        DONE	               Операция полностью завершена.
            */
            console.warn('readyStateChange:', e, xhr.readyState);
            if( xhr.readyState === 4 && xhr.status === 200){
                console.log('DONE');
            } else {
                console.log('SOME ERROR');
            }
        });

        xhr.upload.addEventListener('progress', (e) => {
            console.log( 'progress', e );
            console.log(e, e.loaded + ' / ' + e.total);
            let bar = document.getElementById('bar');
            let total = e.total;
            let current = e.loaded;
            let percent = (current * 100) / total;
            bar.value = percent;
        });

        xhr.upload.addEventListener('loadstart', (e) => console.log('loadstart', e) );
        xhr.upload.addEventListener('loadend', (e) => console.log('loadend', e) );

        /*
            xhr.onreadystatechange = (e) => {}
            xhr.upload.onprogress = (e) => {}
            xhr.upload.onloadstart = (e) => {}
            xhr.upload.onload = (e) => {}
            xhr.upload.onloadend = (e) => {}
        */

        xhr.open("POST", "http://localhost:3122/progress", true);
        xhr.send(file);
    };


});