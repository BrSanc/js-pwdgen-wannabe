let userName = prompt("Nome: ");
let userSurname = prompt("Cognome: ");
let userFavoriteColor = prompt("Colore Preferito: ");
let firtsNumber = parseInt(prompt ("Primo numero: "));
let secondNumber = parseInt(prompt ("Secondo numero: "));

let passwordNumber = firtsNumber / secondNumber;

let userRandomPassword = userName + userSurname + userFavoriteColor + passwordNumber;

console.log(userRandomPassword);

document.getElementById("randomPassword").innerHTML = userRandomPassword;

document.getElementById("userName").innerHTML = userName;
document.getElementById("userSurname").innerHTML = userSurname;
document.getElementById("userFavoriteColor").innerHTML = userFavoriteColor;