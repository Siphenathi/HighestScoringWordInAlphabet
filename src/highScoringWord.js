function HighScoringWord() {

    let alphabets = GetAlphabetScore();

    return {
        GetHighestScore: function (sentence) {
            let words = null;
            let score = 0;
            let previousScore = 0;
            let wordWithHighScore = null;

            words = sentence.split(' ');
            for (let x = 0; x < words.length; x++) {

                let word = words[x];

                for (let i = 0; i < word.length; i++) {
                    score += alphabets.find(a => a.alphabet == word[i]).score;
                }
                
                if (previousScore == 0) {
                    wordWithHighScore = word;
                    previousScore = score;
                    
                }
                else {

                    if (score > previousScore) {
                        wordWithHighScore = word;
                        previousScore = score;
                    }
                }
                score = 0;
            }
            return wordWithHighScore;
        }
    }
    function GetAlphabetScore() {

        let alphabets = [
            { alphabet: 'a', score: 1 },
            { alphabet: 'b', score: 2 },
            { alphabet: 'c', score: 3 },
            { alphabet: 'd', score: 4 },
            { alphabet: 'e', score: 5 },
            { alphabet: 'f', score: 6 },
            { alphabet: 'g', score: 7 },
            { alphabet: 'h', score: 8 },
            { alphabet: 'i', score: 9 },
            { alphabet: 'j', score: 10 },
            { alphabet: 'k', score: 11 },
            { alphabet: 'l', score: 12 },
            { alphabet: 'm', score: 13 },
            { alphabet: 'n', score: 14 },
            { alphabet: 'o', score: 15 },
            { alphabet: 'p', score: 16 },
            { alphabet: 'q', score: 17 },
            { alphabet: 'r', score: 18 },
            { alphabet: 's', score: 19 },
            { alphabet: 't', score: 20 },
            { alphabet: 'u', score: 21 },
            { alphabet: 'v', score: 22 },
            { alphabet: 'w', score: 23 },
            { alphabet: 'x', score: 24 },
            { alphabet: 'y', score: 25 },
            { alphabet: 'z', score: 26 }
        ]
        return alphabets;
    }
}
