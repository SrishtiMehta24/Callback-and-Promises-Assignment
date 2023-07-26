function ageInDays(person){
    const {firstName, lastName, age} = person
    const fullName = `${firstName} ${lastName}`;
    const ageInDays = age*365;                    //in days

    function logResult(){
        console.log(`The person's full name is : ${fullName}, and their age in days is ${ageInDays}`);
    }
    return logResult();
}

let object = {
        firstName: "Srishti",
        lastName: "Mehta",
        age: 20,                //in years
}

console.log(ageInDays(object))