/*
    Call Stack and Event Loop
*/ 

function func1() {
    func2();
}

function func2() {
    func3();
}

function func3() {
    // throw Error('oops');
    let a = 2;
    debugger;
}
func1();
