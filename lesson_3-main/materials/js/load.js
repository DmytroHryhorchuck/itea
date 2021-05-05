// DOMContentLoaded – браузер полностью загрузил HTML и построил DOM-дерево.
// load – браузер загрузил все ресурсы.

  // Аналог jQuery $(document).ready()
  // document.addEventListener("DOMContentLoaded", function(event) {
  //   // var loader = document.querySelector('.loader');
  //   // loader.classList.remove('hide');
  //   console.log("DOM fully loaded and parsed");
  // });
  
  window.addEventListener('load', function(){
    let loader = document.querySelector('.loader');
    loader.classList.add('hide');
  });

  let appendImage = document.getElementById('appendImage');
  appendImage.addEventListener('click', function(){
    let ImageCat = new Image(100, 100);
        console.log(ImageCat);
        ImageCat.onload = function(){
            appendBlock.appendChild(ImageCat);
            ImageCat.classList.add('loadedImage');
        };
        ImageCat.onerror = function(err){
          new Error('Some Error on load', err);
        };
        ImageCat.src = 'images/Ef05RXs.jpg'; 
  });
