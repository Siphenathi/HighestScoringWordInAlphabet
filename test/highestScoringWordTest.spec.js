describe("Highest scoring word", function () {
    describe("GetHighestScore", function () {
        describe("Given that u have 1 alphabet with 1 score", function () {
            
            it("Should return the score the alphabet has", function () {
                //Arrange
                let sut = new HighScoringWord();
                //Act
                let sentence = 'i am here ma'
                let actual = sut.GetHighestScore(sentence);
                //Assert
                expect(actual).toBe("here");
            })
        })
        describe("Given that u have mutliple alphabets ", function () {
            it("Should return the score the alphabet has", function () {
                //Arrange
                let sut = new HighScoringWord();
                //Act
                let sentence = 'abc'
                let actual = sut.GetHighestScore(sentence);
                //Assert
                expect(actual).toBe("abc");
            })
        })
        describe("Given that u have mutliple alphabets ", function () {
            it("Should return the score the alphabet has", function () {
                //Arrange
                let sut = new HighScoringWord();
                //Act
                let sentence = 'c';
                let actual = sut.GetHighestScore(sentence);
                //Assert
                expect(actual).toBe('c');
            })
        })

        describe("Given 1 word ", function () {
            it("Should return the score of the ", function () {
                //Arrange
                let sut = new HighScoringWord();
                //Act
                let sentence = 'family';
                let actual = sut.GetHighestScore(sentence);
                //Assert
                expect(actual).toBe('family');
            })
        })

        describe("Given words ", function () {
            it("Should return the score of an alphabet", function () {
                //Arrange
                let sut = new HighScoringWord();
                //Act
                let sentence = 'i find it interesting';
                let actual = sut.GetHighestScore(sentence);
                //Assert
                expect(actual).toBe('interesting');
            })
        })

    })
})