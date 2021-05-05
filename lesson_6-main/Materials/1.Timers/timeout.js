/*
    setTimeout - метод выполняет код(или функцию),
    указанный в первом аргументе, асинхронно, с задержкой в delay миллисекунд.
    setTimeout выполняет код только один раз
*/  


document.addEventListener('DOMContentLoaded', function(){

    /*
        Syntax: setTimeout( function(){}, timeout );
    */
    // setTimeout( myFunction, 1000 );
    const fireBtn = document.getElementById('fire');

    let timer = null;
    function myFunction() {
        console.log("Hello 1");
        timer = setTimeout(
            function(){ 
                console.log("Hello 2") 
            },
        2000);
        console.log('Hello 3', timer )
    }
    
    fireBtn.addEventListener('click', myFunction);
    
    function stopTimer(){
        console.log('stop', timer );
        clearTimeout( timer );
    }

    const stopBtn = document.getElementById('stop');
    stopBtn.addEventListener('click', stopTimer);


    const throtling = document.getElementById('throtling');
    let throtling_timer = null;
    throtling.addEventListener('input', (e) => {
        clearTimeout( throtling_timer );
        if( e.target.value.length > 3){
            throtling_timer = setTimeout( () => {
                console.log('DO SOME ASYNC STUFF', e.target.value.length);
            }, 300);
        }
    });



});
