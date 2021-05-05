
const MAIN_ID = "components";
const MODULE_CLASS = "._module";
const ADD_BUTTON_CLASS = "._button_add";
const MINUS_BUTTON_CLASS = "._button_minus";
const RESULTS_CLASS = "._result";

const components = document.getElementById(MAIN_ID);
const modules = components.querySelectorAll(MODULE_CLASS);

modules.forEach( function( module ){

    const result_node = module.querySelector( RESULTS_CLASS );
    const add_btn = module.querySelector( ADD_BUTTON_CLASS );
    const minus_btn = module.querySelector( MINUS_BUTTON_CLASS );

    let score = 0;

    add_btn.onclick = function(){
        score += 1;
        result_node.innerHTML = score;
    }

    minus_btn.onclick = function(){
        score -= 1;
        result_node.innerHTML = score;
    }

})


console.log( '[modules]', modules );