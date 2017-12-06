var fibonacci = function(n) {
    if(n <= 1){
	return n;
    }	
    else{
	console.log(n);
	return fibonacci(n-1) + fibonacci(n-2);
    }
}

var min = function(a, b) {
    if(a > b){
	return a;
    }
    else{
	return b;
    }
}

var gcd = function(a, b) {
    if( min(a,b) == a){
	return gcd(b,a);
    }
    if(b == 0){
	return a;
    }
}

