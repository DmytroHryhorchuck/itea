
let deconctruct = {
    prop1: 'demo',
    prop2: 'test',
    prop4: {
        pop: {
            pop: {
                love: {
                    cats: 'Cat',
                    cookies: 'With Chocolate'
                }
            }
        }
    },
    prop3: function(){
        return 213;
    }
}

let { prop4, prop2, prop1, prop3 } = desonctruct;
let { cats, cookies } = desonctruct.prop4.pop.pop.love;



// console.log( prop4, prop1, cats, cookies)


  // let { t, k, ...z } = {
  //     t: ['x'],
  //     k: ['k'],
  //     a: 3,
  //     b: 4
// };

// console.log(t); // ['x']
// console.log(k); // ['k']
// console.log(z); // { a: 3, b: 4 }

const superArray = [1,2,3,4,5,6,7,8];


const [ a, c, d, y,   ...b ] = superArray;
console.log( a,c,d, y,  b);
