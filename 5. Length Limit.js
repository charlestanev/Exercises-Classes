// Create a class Stringer, which holds single string and a length property. The class should be initialized with a string, and an initial length. The class should always keep the initial state of its given string.
// Name the two properties innerString and innerLength.
// There should also be functionality for increasing and decreasing the initial length property.
// Implement function increase(length) and decrease(length), which manipulate the length property with the given value.
// The length property is a numeric value and should not fall below 0. It should not throw any errors, but if an attempt to decrease it below 0 is done, it should be automatically set to 0.
// You should also implement functionality for toString() function, which returns the string, the object was initialized with. If the length of the string is greater than the length property, the string should be cut to from right to left, so that it has the same length as the length property, and you should add 3 dots after it, if such truncation was done.
// If the length property is 0, just return 3 dots.
// Examples
// lengthLimit.js
// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test
// test.decrease(3);
// console.log(test.toString()); // Te...
// test.decrease(5);
// console.log(test.toString()); // ...
// test.increase(4); 
// console.log(test.toString()); // Test
// Hints
// Store the initial string in a property, and do not change it. Upon calling the toString() function, truncate it to the desired value and return it.
// Submit your solution as a class representation only! No need for IIFEs or wrapping of classes.

class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        return this.innerLength === 0 ?
            '...' :
            this.innerString.slice(0, this.innerLength) + '...'
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test