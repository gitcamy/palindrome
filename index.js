module.exports = Phrase;

//Add `reverse` to all strings 
String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

//defines a Phrase objec†
function Phrase(content) {
    this.content = content;

    //Returns processed content for palindrome testing
    this.processedContent = function processedContent() {
        return this.content.toLowerCase();
    };

    //Returns true for a palindrome, false otherwise
    this.palindrome = function palindrome() {                     
        return this.processedContent() === this.processedContent().reverse();
    };
}
