let assert = require("assert");
let Phrase = require("../index.js");

describe ("Phrase", function() {

    describe ("#palindrome", function() {

        it("should return false for a non-palindrome", function() {
            let nonPalindrome = new Phrase("Apple");
            assert(!nonPalindrome.palindrome());
        });

        it("should return true for a plain palindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });

        it("should return true for a mixed case palindrome");
            let mixedCase = new Phrase("Racecar");
            assert(mixedCase.palindrome());

        it("should return true for a palindrome with punctuation");


    });

});