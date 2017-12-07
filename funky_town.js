//Fabiha Ahmed & Kristin Lin
//Softdev pd09
//2017-12-05

// fib(n) = fib(n-1) + fib(n-2) where fib(0) and fib(1) = 0
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var fibonacci = function(n) {
    if (n <= 1){
	return n;
    } else{
	return fibonacci(n-1) + fibonacci(n-2);
    }
}

// return lesser num
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var min = function(a, b) {
    if (a < b){
	return a;
    } else{
	return b;
    }
}

//Euclidean algorithm using remainder; a > b always
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var gcd = function(a, b) {
    if (min(a,b) == a){
	return gcd(b,a);
    }
    if (b == 0){
	return a;
    }
    return gcd(b, a%b);
}


var students = ['alice', 'bob', 'carrie', 'dylan', 'eddie', 'fred', 'george'];

//Math.random() to find random student in list students
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var randStudent = function() {
    var s = Math.floor(Math.random() * students.length);
    return students[s];
}

