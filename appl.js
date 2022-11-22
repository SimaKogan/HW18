const str1 = "yellow";
const str2 = "leloylq";
function isAnagram(str1, str2) {
    const strArr1 = Array.from(str1);
    const strArr2 = Array.from(str2);
    if (strArr1.length !== strArr2.length) {
        return "Should be the same length, ERR";
    }

    let counter = strArr1.length;
    const occurances = {};
    strArr1.forEach(element => {
        if (occurances[element]) {
            occurances[element]++;
        } else {
            occurances[element] = 1;
        }
    });

    const occurancesArr = Object.entries(occurances);

    strArr2.forEach((letter, i) => {
        occurancesArr.forEach((occurance, index) => {
            let [occLetter, occAmount] = occurance;
            if (occLetter === letter) {
                occAmount = occAmount - 1
                occurancesArr[index] = [occLetter, occAmount];

                if (occAmount >= 0) {
                    counter = counter - 1;
                }
            }
        })
    })

    return counter === 0;
}

console.log(isAnagram(str1, str2))