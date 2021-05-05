/*
    FETCH
*/

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("Content-Length", 255);
    myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

    function FetchDemo(){
        let url = 'http://www.json-generator.com/api/json/get/bTvshRCyPS?indent=2';
        let options = {
        // Все опции:
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
        method: 'POST', // GET, PUT, DELETE etc.
        // headers: {
        //     "Content-Type": "application/json"
        // },
        /*
            https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
            Сюда можно передать любые http headers как просто обьектом:
            {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
            Или через конструктор
    
            var myHeaders = new Headers();
                myHeaders.append("Content-Type", "text/plain");
                myHeaders.append("Content-Length", 255);
                myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
    
            https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers
            https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
        */
    
        // body: JSON.stringify({
        //     test: 123
        // }), // Любые данные для вашего запроса
        // mode: 'same-origin',

            /*
                CORS: Cross-Origin Resourse Shairing
                Если просто: то в каком режиме кросс-доммености будет сделан запрос
                Если сложно: доки: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            */
        };
        
        // const renderData = ( data ) => {
        //     console.log('data', data )
        //     data.map( item => {
        //         document.body.innerHTML += `<h2>${item.name}</h2>`;
        //     })
        //     return data;
        // }
        
        // const x = fetch( url, options )
        //     .then( res => res.json() )
        //     .then( res => {
        //         return fetch('http://localhost:3122/data', { method: "POST"})
        //             .then( res => res.json() )
        //             .then( res => {
        //                 console.log('second fetch', res );
        //                 return res;
        //             })
        //     })
        // // .then( res => {
        // //     return fetch(...)
        // // })
        // .then( renderData );

    }

    document.addEventListener('DOMContentLoaded', () => {
        FetchDemo();
    });