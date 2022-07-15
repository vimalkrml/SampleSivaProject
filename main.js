function siva() {
    var getnum1 = parseInt(prompt('get Number', 20));
    var getnum2 = parseInt(prompt('get Number', 20));
    var add = getnum1 + getnum2;
    alert(add)
}

// js functions

function getName1(name) {
    console.log('Hi ' + name)
}

getName1('siva')

// callback functions

function getName(age, callback) {
    console.log("Siva")
    callback(age)
}
function getAge(age) {
    console.log("My age is " + age)
}

getName('12', getAge)
