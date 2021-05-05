document.addEventListener('DOMContentLoaded', () => {

    /*

    */  


    const intercept = success => {
        console.log('interceptor then');
        return success;
    };
    const age = ( success ) => {
        console.log('success', success);
        const res = success.map( item => {
            item.age = 35;
            return item;
        });
        return res;
    }

    const ageFallback = ( error ) => {
        console.log('error', error );
        // LOG ERROR => 
        throw 'Error in promise';
        // FALLBACK
        return [
            {
                id: 3,
                name: "Fallback test 1"
            },
            {
                id: 4,
                name: "Fallback test 2"
            }
        ];
    }

    const animals = ( users ) => {
        const res = users.map( user => {
            user.animal = "dog";
            return user;
        });
        console.log('3d then', res );
    }

    const handdleError = (error) => {
        console.log( 'error', error );
    };

    // let promiseObj = new Promise( ( resolve, reject) => {
    //     console.log('In promisee')  
    //     resolve([
    //         {
    //             id: 1,
    //             name: 'Dexter'
    //         },
    //         {
    //             id: 2,
    //             name: 'John'
    //         }
    //     ]);
    //     // reject( null ); 
    // })
    // .then( intercept )
    // .then( 
    //     age,
    //     ageFallback
    // ) 
    // .then( animals )
    // .catch( handdleError );

    // console.log( promiseObj );

    let RenderImage = (image) => document.getElementById("target").appendChild(image);

    const loadImagePromise = ( url ) => 
        new Promise( (resolve, reject) => {
            let imageElement = new Image();
            imageElement.onload = function(){
                resolve(imageElement);
            };

            imageElement.onerror = function(){
                var message = 'Error on image load at url ' + url;
                imageElement.src = 'images/cat5.jpg';
                reject(imageElement);
            };
            
            imageElement.src = url;
        });


    loadImagePromise('images/cat1.jpg')
        .then( RenderImage )
        .catch( RenderImage );


    let promises = [
        loadImagePromise('images/cat1.jpg'),
        loadImagePromise('images/cat22.jpg'),
        loadImagePromise('images/cat3.jpg'),
        loadImagePromise('images/cat4.jpg'),
        loadImagePromise('images/cat6.jpg')
    ];

    Promise.all(promises)
    .then( res => {
        console.log( res );
        return res.map( ( img ) => {
            RenderImage( img );
            return img;
        });
    });


    Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status)));


    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'one');
    });
        
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 499, 'two');
    });
        
    Promise.race([promise1, promise2]).then((value) => {
        console.log(value);
    // Both resolve, but promise2 is faster
    });

});