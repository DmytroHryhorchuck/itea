/*
    В отличие от метода setTimeout,
    setInterval выполняет код много раз,
    через равные промежутки времени, пока не будет остановлен при помощи clearInterval.
*/

document.addEventListener('DOMContentLoaded', function(){

    /*
        Syntax: setInterval( function(){}, timeout );
    */
    const fireBtn = document.getElementById('fire');

    // let counter = 0;
    // function myFunction() {
    //     setInterval(
    //         function(){
    //             console.log("Hello", counter)
    //             counter++;
    //         },
    //     1000 );
    // }
    // fireBtn.addEventListener('click', myFunction)

    // ----
    // const stopTime = document.getElementById('stopTime');
    // const INTERVAL_MS = 1000;
    // let myTimerObj = null;

    function myTimer() {
        const timeNode = document.getElementById('time');

        let localDate = new Date();
        let localTime = localDate.toLocaleTimeString();
        timeNode.innerHTML = localTime;
    }
    
    // myTimerObj = setInterval( myTimer, 1000 );
    // stopTime.timer = setInterval( myTimer, INTERVAL_MS );


    function myStopFunction(e) {
        // clearInterval( myTimerObj );
        console.log( stopTime.timer );
        console.dir( stopTime );
        clearInterval( stopTime.timer );
    }
    stopTime.addEventListener('click', myStopFunction);

});



    
