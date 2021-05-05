document.addEventListener('DOMContentLoaded', () => {

    // Demo1();
    // Demo2();
    // Demo3();

    // DemoJson();

    // XMLHTTPreqDemo1();
    // XMLHTTPreqDemo2();

    // PromisesDemo1();
    // PromisesDemo2();

    FetchDemo();
});

const RenderImage = ( img ) => document.getElementById("target").appendChild( img );

const Demo1 = () => {
    
    const one = () => {
        console.log('one');
    }
    const two = () => {
        console.log('two');
    }
    const three = () => {
        console.log('three');
    };
    one();
    setTimeout( two, 0 );
    three();
}

const Demo2 = () => {
    // Callbacks
    const success = () => console.log('[success]');
    const failure = () => console.error('[failure]');
    const success2 = () => console.log('[success2]');
    const failure2 = () => console.error('[failure2]');

    const someAsyncLogic = ( status, success_callback, failure_callback ) => {
        setTimeout( () => {
            if( status ){
                success_callback();
            } else {
                failure_callback();
            }
        }, 1000 )
    };

    // btn.addEventListener('click', () => {...});

    someAsyncLogic( true, success, failure );
    someAsyncLogic( false, success2, failure2 );

}

const Demo3 = () => {

    /*
        Async Callback Antipattern

        request( user, ( res ) => {
            if( res.status === 200){
                request( userData, () => {
                    // CALLBACK HELL
                });
            }
        });
    */

    /*
        Deal with if
        if( !a ){
            return false;
        }
        if( !b ){
            return false;
        }
        return true;

        vs.

        if( a === true ){
            if( b === true ){
            } else {
                return false;
            }
        } else {
            return false;
        }
    */


    const loadImageCallback = ( url, callback ) => {
        let image = new Image();
        image.onload = () => {
            callback( true, image );
        }
        image.onerror = ( error ) => {
            // console.log('error', error );
            let errorLoading = new Error( `Error on loading: ${url}` );
            callback( false, errorLoading );
        }
        image.src = url;
    }

    loadImageCallback('images/cat12.jpg', ( status, response ) => {
        console.log( response );
        if( !status ){
            throw response;
        }
        RenderImage( response );
        // loadImageCallback('images/cat12.jpg', ( status, response ) => {
        //     if( !status ){
        //         throw response;
        //     }
        //     RenderImage( response );
        //     loadImageCallback('images/cat3.jpg', ( status, response ) => {
        //         if( !status ){
        //             throw response;
        //         }
        //         RenderImage( response );
        //         loadImageCallback('images/cat4.jpg', ( status, response ) => {
        //             if( !status ){
        //                 throw response;
        //             }
        //             RenderImage( response );
        //         });
        //     });
        // });
    });

}

const DemoJson = () => {

    /*
        JSON.stringify() 
        JSON.parse()
    */

    let user = {
        first: "John",
        last: 'Doe',
        job: `Developer`,
        doSmsng: () => {
            console.log('Hello');
        }
    };

    console.log('[JSON]', user );
    console.log('[JSON]', JSON.stringify(user) );

    let server_user =  JSON.parse('{"first":"John","last":"Doe","job":"Developer"}');
        server_user.age = 40;

    console.log('[JSON]', JSON.stringify(server_user)  );
    
}

const XMLHTTPreqDemo1 = () => {

    // let xhr = new XMLHttpRequest();
    // console.log('[XHR]', xhr );
    // xhr.open("GET", "http://localhost:3122/users", false );
    // xhr.send();

    // if( xhr.status !== 200 ){
    //     //... Handle Error
    // } else {
    //     console.log('[XHR]', xhr );
    //     let data = JSON.parse( xhr.responseText);
    //     console.log('[XHR:response]',  data );
    //     data.map( user => {
    //         let node = document.createElement('div');
    //         node.innerHTML = `[User:] ${user.name}: ${user.eyeColor}`
    //         document.body.appendChild( node );
    //     });
    // }
}

const XMLHTTPreqDemo2 = () => {

    const form = document.forms.upload;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let file = form.elements.myfile.files[0];
        console.log(file);
        if( file ){
            upload( file );
        }
        return;
    });

    const upload = ( file ) => {

        console.log(' [file]', file );
        let xhr = new XMLHttpRequest();

        // xhr.addEventListener('readystatechange', (e) => {
        //     console.log('[XHR:EVENT]', e );
        //     console.log('[XHR:RS]', xhr.readyState );
        // });
    
        xhr.upload.addEventListener('progress', (e) => {
            const bar = document.getElementById('bar');
            const { loaded, total } = e;
            bar.value = (loaded * 100) / total;
            console.log('[XHR:PROGRESS]', `${loaded}/${total}`, );
        });

        xhr.addEventListener('loadstart', () => {
            console.log('loadstart');
        });

        xhr.addEventListener('loadend', () => {
            console.log('loadend');
        });

        xhr.upload.addEventListener('loadend', () => {
            console.log('upload loadend');
        });

        xhr.open("POST", "http://localhost:3122/progress", true );
        xhr.send( file );
    
        console.log('[XHR]', xhr );


    }

}

const getStoredData = () => {
    return [
        {
            id: 3,
            name: "Dexter"
        },
        {
            id: 4,
            name: "Debra"
        }
    ];
}

const PromisesDemo1 = () => {

    // let promiseObj = new Promise( () => {}, () => {});
    // console.log('[PROMISE]', promiseObj );

    let promiseObj = new Promise(( resolve, reject ) => {

        resolve([
            {
                id: 1,
                name:  "John"
            },
            {
                id: 2,
                name: "Jane"
            }
        ]);
        // reject({ status: false });

    });
    console.log('[PROMISE]', promiseObj );


    const SuccessGet = ( res ) => {
        console.log('Success:', res );
        return res;
    }

    const ErrorGet = ( res ) => {
        console.log('Error:', res );
        return getStoredData();
        // ...
    }

    const AddAgeToUsers = ( users ) => users.map( user => {
        user.age = Math.random() * 100;
        return user;
    });

    const GetUserAnimal = users => users.map( user => {
        user.animal = "Dog";
        return user;
    });


    promiseObj
        .then( SuccessGet, ErrorGet )
        .then( GetUserAnimal )
        .then( AddAgeToUsers )
        .then( users => {
            console.log('Final Users:', users );
            // doSmng( users );
        });
    

}

const PromisesDemo2 = () => {


    const loadImagePromises = ( url ) => {

        return new Promise( ( resolve, reject ) => {
            let image = new Image();
            image.onload = () => {
                resolve( image );
            }
            image.onerror = ( error ) => {
                reject( new Error( `Error on loading: ${url}` ) );
            }
            image.src = url;

        });
    }

    const AddAgeToUsers = ( users ) => users.map( user => {
        user.age = Math.random() * 100;
        return user;
    });

    // loadImagePromises('/images/cat1.jpg')
    //     .then( RenderImage )
    //     .then( AddAgeToUsers )
    //     .catch( ( error ) => {
    //         let image = new Image();
    //         image.src = "images/cat5.jpg";
    //         RenderImage( image );
    //         console.log('CATCH', error );
    //     });

    const promises = [
        loadImagePromises('/images/cat1.jpg'),
        loadImagePromises('/images/cat2.jpg'),
        loadImagePromises('/images/cat3.jpg'),
        loadImagePromises('/images/cat4.jpg'),
        loadImagePromises('/images/cat5.jpg'),
    ];

    Promise.all( promises )
        .then( promises => {
            console.log('promises', promises );
            promises.map( RenderImage );
        });

}


const FetchDemo = () => {


    let url = "http://localhost:3122/users";
    let second_url = "http://localhost:3122/data";
    let options = {
        method: "POST",
        headers: {
            "Autorization" : "123123123123",
            "X-Custom-Header": "ProcessThisImmediately"
        },
        mode: "no-cors",
        body: JSON.stringify({
            num: 123
        })
    };
    
    fetch( url, options )
        .then( response => response.json() )
        .then( res => {
            return fetch( second_url, { method: "POST"} )
                .then( res => res.json() )
                .then( nums => {
                    console.log('[data]', res );
                    //... r

                    return {
                        users: res,
                        nums: nums
                    }
                })
        })
        .then( data => {
            console.log( data );
        });


}