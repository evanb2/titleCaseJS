describe("titleCase", function() {
    it("capitalizes the first letter of a word", function() {
        expect(titleCase("cat")).to.equal("Cat");
    });

    it("lowercases the input and then returns the input with title case", function() {
        expect(titleCase("COW")).to.equal("Cow");
    });

    it("takes multiple words for input and title cases them", function(){
        expect(titleCase("hey there")).to.equal("Hey There");
    });

    it("does not capitalize certain words in the input", function(){
        expect(titleCase("man from uncle")).to.equal("Man from Uncle");
    });

    it("does capitalize the first and last word of the input", function(){
        expect(titleCase("of mice and men and out")).to.equal("Of Mice and Men and Out");
    });

    it("does capitalize shakespear titles", function(){
        expect(titleCase("to be or, not to be")).to.equal("To Be or, Not to Be");
    });
});
