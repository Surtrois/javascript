var nom = "john"
console.log(nom);
var nom = "jane"
console.log(nom);

let list ='';
for (let I = 1; I < 11; I++) {
    list = list + I  
}
console.log(list)

console.log("Bonjour tout le monde(sauf evan)!");
console.log(3 + 4);
console.log(nom);

var firstName = "John"
var lastName = "Doe"
var complete = `${firstName} ${lastName}`;
console.log(complete)

function age(a) {
    let result;
    if (a > 18){
        result = 'tu es majeur';
    } else {
        result = 'tu n\'es pas majeur';
    }
    return result;
}

console.log(age(26))


let couleurs = ['rouge', 'vert', 'bleu', 'jaune', 'orange'];
for (var i = 0; i < couleurs.length; i++) {
    console.log(couleurs[i])
}

let numbers = [1,2,3,4,5];

numbers.push(6)
console.log(numbers)

numbers.pop(6)
console.log(numbers)