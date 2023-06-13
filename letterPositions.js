const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toLowerCase();

    if (letter !== ' ') {
      if (!results.hasOwnProperty(letter)) {
        results[letter] = [];
      }
      results[letter].push(i);
    }
  }

  return results;
};

module.exports = letterPositions;


