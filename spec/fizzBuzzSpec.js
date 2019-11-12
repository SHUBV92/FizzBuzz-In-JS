describe( 'Fizzbuzz', function() {
    // var fizzBuzz; 

    beforeEach(function() {
        fizzBuzz = new FizzBuzz();
    });
    
describe('multiples of 3', function() {
    it('take 3 and return fizz', function() {
        expect(fizzBuzz.play(3)).toEqual('fizz');
    });

    it('fizzes for 6', function() {
        expect(fizzBuzz.play(6)).toEqual('fizz');
    });
});

describe('multiples of 5', function(){
    it ('take 5 & return buzz', function(){
        expect(fizzBuzz.play(5)).toEqual('buzz');
    });

    it ('buzzes for 10', function(){
        expect(fizzBuzz.play(10)).toEqual('buzz'); 
    });
});    

describe('multiples of 3 & 5', function(){    
    it ('divisible by both 3 & 5', function(){
        expect(fizzBuzz.play(15)).toEqual('fizzBuzz');
    });
});

describe('multiples of any number', function(){    
    it ('return num if any other num given', function(){
        expect(fizzBuzz.play(34)).toEqual(34)
    });
    });

});




