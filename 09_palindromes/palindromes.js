const palindromes = function (text) {  

    let palimdrom = text.replaceAll('!','').replaceAll('.','').replaceAll(',','').replaceAll(' ','').trim().toLowerCase();
    let textArray = palimdrom.split("").reverse().join("");
    return palimdrom==textArray;
};

// Do not edit below this line
module.exports = palindromes;
