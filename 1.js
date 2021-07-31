'use strict'

//ES5 SYNTAX
function Go(text) {
    this.text = text;
}

Go.prototype.say = function() {
    console.log("it's go" + `app ${this.text} goes`);
}

function GoWell(text, text2) {
    Go.call(this, text);
    this.text2 = text2;
}

GoWell.prototype = Object.create(Go.prototype);
GoWell.prototype.constructor = GoWell;

GoWell.prototype.tell = function() {
    console.log(`This is ${this.text2}`)
}

const goFunc = new GoWell("Func1", "Function2");
goFunc.say();
goFunc.tell();
console.log("××××××××××××××××")