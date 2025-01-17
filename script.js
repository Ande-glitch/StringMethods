// // Oppgave 1


function En() {
    let enLengde = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("demo1").textContent = `${enLengde} er ${enLengde.length} bokstaver lang.`;
}

// // Oppgave 2

let toTekst = "";

function To() {
    if (toTekst === "") {
        document.getElementById("demo2").textContent = `Tekst felten ${toTekst} er tom`
    } 
    else {
        document.getElementById("demo2").textContent = `Tekst felten ${toTekst} er fyldig`
    }
}

// // Oppgave 3

let treIndex = "HELLO WORLD";

function Tre() {
    wIndex = treIndex.indexOf("W");
    document.getElementById("demo3").textContent = `Første index av "W" i ${treIndex} er ${wIndex}`;
}

// // Oppgave 4

// // Forskjellen mellom charAt() og at() er:
// // charAt() kjenner til bare positive verdier, altså > 0
// // at() kan kjenne til negative verdier i tilegg av positive, som betyr i stringen "HELLO WORLD", -1 = D.
// // eksempel kode
// console.log(treIndex.at(-3));
// console.log(treIndex.charAt(-3));

// // Oppgave 5

// // De tre metoder til å trekke ut en del av stringen er følgende
// // slice(), substring() og substr().

// // Forskjellen mellom disse kan bli talt slik:
// // Slice funker ved å velge hvilken index å starte på, deretter hvilken index å slutte på. Den kan også kjenne igjen negative verdier, og går til slutten av stringen når talt med -1.
// // Substring kjenner ikke igjen til negative verdier og viser verdien uten endring eller viser tom felt ifølge index 0 til minus verdi. Den vil også ta prioritet i det minste tallet, og sortere slik at det start indexen vil være lavest tall til høyest tall.
// // Substr først har start index, og deretter viser den ferdige stringen ifølge hvor lenge du vil at den skal vise eks. (0, 5) vil lage at du starter på index 0, og viser bare 5 strings fra index starten. Den også kjenner til negative verdier, og sorterer ikke dem som substring gjør.

// console.log(treIndex.substring(0, -4)); // kan ikke funke fordi substring kjenner ikke negative verdier
// console.log(treIndex.slice(0, -4)); // funker fordi kan kjenne til
// console.log(treIndex.substr(-11, 5)); // starter på -11 index som er H, og fortsetter å legge til 5 mere strings til det ønsket resultat.

// // Oppgave 6

let text1 = "Apple, Banana, Kiwi";
let text1Arr = text1.slice(7, 13);

function Seks() {
    document.getElementById("demo6").textContent = `Fra textfeltet ${text1} tok vi ut ${text1Arr} med slice()`
}

// // Oppgave 7

let text2Arr = text1.substring(7, 13);

function Sju() {
    document.getElementById("demo7").textContent = `Fra textfeltet ${text1} tok vi ut ${text2Arr} med substring()`
}

// // Oppgave 8

let text3Arr = text1.substr(7, 6)

function Att() {
    document.getElementById("demo8").textContent = `Fra textfeltet ${text1} tok vi ut ${text3Arr} med substr()`
}

// // Oppgave 9

let text4 = "Hello World!";
let text4Big = text4.toUpperCase();

function Ni() {
    document.getElementById("demo9").textContent = `Fra textfeltet ${text4} gjorde vi om og lagde den til ${text4Big} med toUppercase()`
}

// // Oppgave 10

let text5Big = text4.toLowerCase();

function Ti() {
    document.getElementById("demo10").textContent = `Fra textfeltet ${text4} gjorde vi om og lagde den til ${text5Big} med toLowercase()`
}

// // Oppgave 11

let text6 = "  Røyken Videregående Skole                     ";
let text6Arr = text6.trim().split(' ')

function Elev() {
    document.getElementById("demo11").textContent = `Fra textfeltet ${text6} lagde vi den til en array i console log med bruk av trim() og split()`
    console.log(text6Arr);
}

// // Oppgave 12

let palindrome = "Racecar";
let palindromeArr = palindrome.split("").reverse().join("").toUpperCase()

function Tolv() {
    if (palindrome.toUpperCase() === palindromeArr) {
        document.getElementById("demo12").textContent = `${palindrome} er en palindrome`;
    }
    else {
        document.getElementById("demo12").textContent = `${palindrome} er IKKE en palindrome`;
    }
}

// // Oppgave 13

let tekstTrett = "audhsadaosdifgasdvbvpijsbvohasbhouawceriv";
let result = tekstTrett.split("").sort();

function Trett() {
    document.getElementById("demo13").textContent = `Textfeltet ${tekstTrett} viser ${result} når sortert alfabetisk`;
}

// // Oppgave 14


function Fjort(teksten, bokstaven) {
    let fjortResult = teksten // make the text into an array
    let anTall = 0; // empty value for anTall to be filled later, and classify as number value
    for (let i = 0; i < teksten.length; i++) { // repeat the process for the length of the text
        if (fjortResult[i] === bokstaven) { // as fjortResult is an array made up by 17 characters, as the loop goes throughout the letters, if any of them match with "bokstaven" add 1 to the antall counter
            anTall++;
        }
    }
    document.getElementById("demo14").textContent = `I teksten "${teksten}" finnes det ${anTall} ganger der "${bokstaven}" blir brukt`;

}

    Fjort("Welcome to Norway", "o"); // arguments to pass into the parameters, as a bit of a hindrance also runs the function because it was called

// Challenge 1

function femTen(parameter_1, parameter_2) {
    for (let i = 0; i < parameter_1.length; i+= parameter_2) {
        console.log(parameter_1.slice(i, i + parameter_2)); // starts at index i = 0, thereafter starts again at another i index, but also ends at i index + 3 spaces forward. 
    }

}

femTen("ABCAABCAAADA", 3)

// Challenge 2

function seksTen(parameter_1, parameter_2) {
    let anTall = "";
    for (let i = 0; i < parameter_1.length; i+= parameter_2) {
        anTall = parameter_1.slice(i, i + parameter_2) // get a seperate array for every 3 characters
        anTall = anTall.split("") // make to array
        for (let i = 0; i < anTall.length; i++) { 
            if (anTall[i] === anTall[i+2]) { 
                anTall.splice(i+2, 1) // splice starts at the selected index, and removes x amount element from the index
            }
            else if (anTall[i] === anTall[i+1]) {
                anTall.splice(i+1, 1)
            }
        }
        console.log(anTall);
    }
}

seksTen("ABCAABCAAADA", 3)

// Challenge 3

// function finalTime(Text1, Text2) {
//     let finalResult = (Text1 + Text2);
//     let printed = [];
//     let duplicates = [];

//     for (let i = 0; i < finalResult.length; i++) {
//         let char = finalResult[i];
//         if (printed.includes(char) && !duplicates.includes(char)) {
//             duplicates.push(char)
//         }
//         else if (!printed.includes(char)) {
//             printed.push(char)
//         }
//     }

//     for (let i = 0; i < 10; i++) {
        
//     }
// }

// finalTime("xdab", "xzca")




