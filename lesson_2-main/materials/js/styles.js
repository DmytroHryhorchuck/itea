/*
    Работа со стилями.    
*/


let node = document.getElementById('node_styles');

console.dir( node );

node.style.background = "red";
node.style.border = "1px solid black";
console.log( node.style.border );

// const progress = document.getElementById('progress');
// let width = 0;
// let timer = setInterval( () => {
//     if( width > 100){
//         clearInterval( timer );
//     }
//     width += 10;
//     progress.querySelector('.progress__bar').style.width = width + '%';
//     console.log('[width]', width, width + '%' );
// }, 500 );


/*
    Browser	CSS Prefix	JavaScript Example
    Safari & Chrome	-webkit-	webkitTransform
    Internet Explorer	-ms-	msTransform
    Firefox	-moz-	mozTransform
    Opera	-o-	oTransform

    https://developer.mozilla.org/ru/docs/Glossary/Vendor_Prefix
*/

// node.style.msTransform = 'scale(2)';       //IE
// node.style.webkitTransform = 'scale(2)';   //Chrome and Safari
// node.style.MozTransform = 'scale(3)';      //Firefox
// node.style.OTransform = 'scale(4)';        //Opera
// node.style.transform = 'scale(2)';  