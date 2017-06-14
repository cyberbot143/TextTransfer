/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//transferString
var str1 = document.getElementById('textBox1');
var str2 = document.getElementById('textBox2');
var testIdToHoldStateOfCounter;

function forward()
{
    clearInterval(testIdToHoldStateOfCounter);

    testIdToHoldStateOfCounter = setInterval(function () {

        document.getElementById("bwd").disabled = false;
        
        var teststr = str1.value;
        var len = teststr.length - 1;
        str2.value += teststr.slice(0, 1);
        str1.value = teststr.substr(1, len);
        if (str1.value.length == 0)
        {
            document.getElementById("fwd").disabled = true;
            clearInterval(testIdToHoldStateOfCounter);
        }
    }, 1000);
}
function backward() {
        
         clearInterval(testIdToHoldStateOfCounter);
        testIdToHoldStateOfCounter = setInterval(function () {
         var teststr1 = str1.value;
         var teststr2 =str2.value;
        document.getElementById("fwd").disabled = false;
        str1.value = teststr2.slice(-1) + teststr1;
        str2.value = str2.value.substring(0, teststr2.length - 1);
        
        if (str2.value.length == 0)
        {
            document.getElementById("bwd").disabled = true;
            clearInterval(testIdToHoldStateOfCounter);
        }

        console.log(str2.value);

    }, 1000);

}

function hold() {
    window.clearInterval(testIdToHoldStateOfCounter);

}


var fn = function () {
    var cntr = 0;
    var fn2 = function () {
        document.write('Hello Everyone');
    };
    var fn3 = function () {
        cntr++;
        return "hello";

    };
    return{
        fn3: fn3,
        fn2: fn2};
};

var fn_resp = fn();
document.write(fn_resp.fn3());

var user1 = {
    first: 'SAI',
    last: 'Krish'
};
var user2 = {
    first: 'SA12I',
    last: 'Kris22h'
};

Object.prototype.displayUser = function () {
    return "Hello";
};

function user(fnName, lName)
{
    this.firstName = 'firstName';
    this.lastName = lastName;
}

var user1 = new user('H', 'H');
console.log(user1.lastName);


var user11 = {};
var user21 = Object.create(Object.prototype, {
    firstName: {

    }

});

var testObj = {
    "firstName": "Dalj",
    "lastName": "Krishna"

};

Object.defineProperties(testObj, "FullName", {
    get: function () {
        return lastName + firstName;
    },
    set: function (value) {
        var varsplit = value.split(" ");
    }
});










