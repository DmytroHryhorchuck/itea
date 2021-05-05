/*
    String Literal:
*/

    let a = 'Карп',
        b = "Селедка";

    // let string = a + ' и ' + b + ' сидели на трубе';
    // console.log( string );

    let newStringLiteral = `${a} и ${b} сидели на ${10+15} трубe`;
    console.log( newStringLiteral );

    // let d = ['Item 1','Item 2','Item 3'];
    // let c = `
    //     <div>
    //         <h1> Hello! </h1>
    //         <ul>
    //             ${
    //                 d.map( (item) => `<li>${item}</li>` ).join('')
    //             }
    //         </ul>
    //     </div>
    // `;
    // console.log(c);

    const message = `
        <div class="test">
            <h1 class="title">${a}</h1>
            <p>${b}</p>
            <button class="_fire"> Fire </button>
        </div>
    `;

    let node = document.createElement('div');
    node.innerHTML = message;
    const btn = node.querySelector('._fire');
    btn.addEventListener('click', () => console.log('HELLO FROM TEMPLATE') )

    document.body.appendChild( node );
