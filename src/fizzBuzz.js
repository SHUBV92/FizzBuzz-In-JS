function FizzBuzz() { 
};

FizzBuzz.prototype.play = function(num) { 
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzBuzz'
    };
    
    if (num % 3 === 0) { 
        return 'fizz'
    }; 
    
    if (num % 5 === 0) {
        return 'buzz'
    };
    if (num === num) {
        return num
    }
   
};


// if num % 3 === 0 && num % 5
//     return "fizzbuzz"
//  });
 






//         if(this._isDivisibleBy(15, number)) {
//         return 'FizzBuzz' };
//     } else if (this._isDivisibleBy(5, number)) {
//         return 'Buzz';
//     } else if (this._isDivisibleBy(3, number)) {
//         return 'Fizz';
//     } else {
//         return number;
//     } 
// }

// FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
//     return number % divisor === 0
// }

// var fizzBuzz = new FizzBuzz();

// for (var i = 1; i <= 100; i++) {
//   console.log(fizzBuzz.play(i));
// }
