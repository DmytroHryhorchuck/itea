document.addEventListener('DOMContentLoaded', () => {

    /*
`       Рассмотрим еще раз работу с Call Stack
        Demo: 1
    */

    // console.log('first log');
    // setTimeout(  () => {
    //     console.log('second log');
    // }, 100 );
    // console.log('third log');

    /*
        Demo 2
    */
    // function one(){
    //     two();
    // }

    // function two(){
    //     three();
    // }

    // function three(){
    //     throw new Error('log this in stack!')
    // }
    // one();

    /*
        Demo 3
    */

    // const success = () => console.log('success');
    // const failure = () => console.error('error');

    // function someAsyncFunction( status, resolve_callback, reject_callback ){
    //     // setTimeout( () => {
    //         if( status ){
    //             resolve_callback();
    //         } else {
    //             reject_callback();
    //         }
    //     // }, 1000);
    // }

    // someAsyncFunction( true, success, failure );
    // someAsyncFunction( false, success2, failure2 );

    /*
        Demo 4
    */
    let RenderImage = (image) => document.getElementById("target").appendChild(image);

    const loadImageCallback = ( url, callback ) => {
        // DOC: IMAGE CONSTRUCTOR: https://developer.mozilla.org/ru/docs/Web/API/HTMLImageElement/Image
        let imageElement = new Image();
    
        // Если загрузилось успешно, то вызываем колбек
        // null передаем потому что эррора нету. См. код функции Render Action
        imageElement.onload = function(){
            callback(null, imageElement);
        };
        // Обрабатываем эррор
        imageElement.onerror = function(){
            var message = 'Error on image load at url ' + url;
            callback( new Error(message) );
        };
        // присваеваем новой картинке переданный урл
        imageElement.src = url;
    }


    const RenderCallback = (error, img) => {
        // throw -> Заканчиваем вполнение программы после выполнения выражания
        if(error){
            throw error;
        }
        RenderImage(img);
    }   

    const LoggerCallback = ( error, img ) => {
        console.log('error:', error, 'image:', img );
    }



    // loadImageCallback('images/cat1.jpg', RenderCallback );


    loadImageCallback('images/cat1.jpg', (error, img) => {
        // throw -> Заканчиваем вполнение программы после выполнения выражания
        if(error){
            throw error;
        }
        RenderImage(img);
    });

});