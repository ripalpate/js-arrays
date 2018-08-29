const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat', cats[0]);

const favoriteAnimals = 'cow,bear,dog,cat';
const favoriteAnimalArray = favoriteAnimals.split(','); //['cow','bear', 'dog', 'cat']
console.log('favoriteAnimalArray', favoriteAnimalArray);

const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('cow');
console.log('newNum', newNum);

//mini challenge
const palChecker = (word) => {
   
    const reverseWord = word.split('').reverse().join('');
    if(word === reverseWord){
        console.log(`${word} is a palindrome`);
    } else {
        console.log(`${word} not a palindrome`);
    }
};
palChecker('mom');
palChecker('monketbutt');
palChecker('racecar');