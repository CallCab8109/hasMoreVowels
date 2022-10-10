// const hasMoreVowels = (word) => {
//     word.split('')
//     vowelArr = [] 
//         if(word.includes('a','e','i','o','u')) {
//             vowelArr.push('a','e','i','o','u')
        
//     }
//     console.log(vowelArr)
// }
// hasMoreVowels('moose')

// program to count the number of vowels in a string

//SOLUTIONS
 function hasMoreVowels(word) {
    word = word.toLowerCase()
    let otherCount = 0;
    let vowelCount = 0;

    for (let i = 0; i < word.length; i++) {
            if(
                 word[i] === 'a' ||
                 word[i] === 'e' ||
                 word[i] === 'i' ||
                 word[i] === 'o' ||
                 word[i] === 'u') {
                vowelCount ++
            } else {
                otherCount ++
            }
    }
    if (vowelCount > otherCount) {
        return true
    }
    return false
 }
console.log(hasMoreVowels('moose'))