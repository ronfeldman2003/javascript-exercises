const reverseString = function(string) {
    let result = "";
    const length = string.length;
    for(let i= length-1;i>=0;i--){
        result += string[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
