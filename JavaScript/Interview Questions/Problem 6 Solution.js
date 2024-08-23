// Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
function CountVowels(inputstr) {
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < inputstr.length; i++) {
        if (vowels.includes(inputstr[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log(CountVowels("AsdefgIoUznfI"));