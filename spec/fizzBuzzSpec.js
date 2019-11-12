describe( 'Fizzbuzz', function() {
    // var fizzBuzz; 

    beforeEach(function() {
        fizzBuzz = new FizzBuzz();
    });
    
    it('take 3 and return fizz', function() {
        expect(fizzBuzz.play(3)).toEqual('fizz');
    });

    it ('take 5 & return buzz', function(){
        expect(fizzBuzz.play(5)).toEqual('buzz');
    });

    it ('divisible by both 3 & 5', function(){
        expect(fizzBuzz.play(15)).toEqual('fizzBuzz');
    });

    it ('return num if any other num given', function(){
        expect(fizzBuzz.play()).toEqual('num')
    });

});

    // it('take in 3 and return 3', function() {
    //     expect(fizzBuzz.play(3)).toEqual(3);
    // });



    // it('take in 1 and return 1', function() { 
    //     expect(fizzBuzz.play().toEqual(1))

    // });


//     describe('multiples of 3', function() {
//         it( 'fizzes for 3', function() {
//             expect(fizzBuzz.play(3)).toEqual('Fizz');
//         });

//         it('fizzes for 6', function() {
//             expect(fizzBuzz.play(6)).toEqual('Fizz');
//         });

//     });

//     describe('multiples of 5', function(){
//         it('buzzes for 5', function(){
//             expect(fizzBuzz.play(5)).toEqual('Buzz');
//         });
        
//         it ('buzzes for 10', function(){
//             expect(fizzBuzz.play(10)).toEqual('Buzz'); 
//         });
//     });
    
//     describe('multiples of 3 and 5', function(){
//         it('fizzbuzzes for 15', function(){
//             expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
//         });
//     });


// });