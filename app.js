function checkAnagrams(words) {
  function abc(str) {
    return str.split("").sort().join("");
  }

  const finalArray = {};

  for (var i = 0; i < words.length; i++) {
    let word = words[i];
    let sortedWord = abc(word);
    if (!finalArray[sortedWord]) {
      finalArray[sortedWord] = [];
    }
    finalArray[sortedWord].push(word);
  }
  return Object.values(finalArray);
}

let input = ["bat", "tap", "cat", "tab", "pat", "aaa"];
console.log(checkAnagrams(input));
