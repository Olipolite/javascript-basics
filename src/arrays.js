const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
  return undefined;
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  if (!index){
    return array.shift();
  }
  return array.splice(index, index-1);

};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(words => words.toUpperCase());
};

const reverseWordsInArray = strings => {
  strings.map((element, index) => {
    element = element.split('');
    element = element.reverse();
    element = element.join('');
    strings[index] = element;
    
  });
  return strings;
  /*
  const newArray = []
  strings.forEach(element => {
    element = element.split('');
    element = element.reverse();
    element = element.join('');
    newArray.push(element);
  });
  return newArray;
  */
}

function onlyEven(numbers) {
  const evenNumbers = numbers.filter(element => {
    if (element % 2 === 0) {
      return element;
    }
  });
  console.log(evenNumbers);
  return evenNumbers;
} 

const removeNthElement2 = (index, array) => {
  const newarray = (index, array);
  if (!index){
    return newarray.shift();
  }
  return newarray.splice(index, index-1);
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
