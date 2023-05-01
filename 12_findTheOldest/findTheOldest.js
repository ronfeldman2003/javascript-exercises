const findTheOldest = function(people) {
    return people.reduce((oldest,current)=>{
        let current_age
        let oldest_age
        let today = new Date().getFullYear();
        if('yearOfDeath' in current){
            current_age =current.yearOfDeath-current.yearOfBirth;
        }else{
            current_age = today-current.yearOfBirth;
        }
        if('yearOfDeath' in oldest){
            oldest_age =oldest.yearOfDeath-oldest.yearOfBirth;}else{
            oldest_age =today-oldest.yearOfBirth;
        }
        if(current_age>oldest_age){
            return current;
        }else{
            return oldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
