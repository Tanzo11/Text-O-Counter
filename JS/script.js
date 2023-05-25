document.addEventListener('DOMContentLoaded', function () {
    let txt = document.getElementById('txt');
    txt.addEventListener('input', update);
});

let data =
{
    words: 0,
    characters: 0,
    uppercase: 0,
    lowercase: 0,
    digits: 0,
    vowels: 0,
    consonents: 0,
    sentences: 0,
    spaces: 0
}
var input = document.getElementById('txt');
var upperCaseText = document.getElementById('uppercaseTxt');
var lowerCaseText = document.getElementById('lowercaseTxt');

function update() {
    const output = document.getElementsByClassName('output')[0];

    const findlength = (item) => (item === null ? 0 : item.length);

    if (input != null) {
        data.words = findlength(input.value.match(/[a-zA-Z]+/gi));
        data.characters = input.value.length;
        data.consonents = findlength(input.value.match(/[BCDFGHJKLMNPQRSTVWXYZ]/gi));
        data.digits = findlength(input.value.match(/\d/g));
        data.lowercase = findlength(input.value.match(/[a-z]/g));
        data.sentences = findlength(input.value.match(/\056/gi));
        data.uppercase = findlength(input.value.match(/[A-Z]/g));
        data.vowels = findlength(input.value.match(/[aeiou]/gi));
        data.spaces = findlength(input.value.match(/[" "]/gi))
    }
    i = 0;
    for (item in data) {
        output.getElementsByClassName('stat')[i].innerText = data[item];
        i += 1;
    }
}

function copyText() {
    navigator.clipboard.writeText(input.value);
}

function clearText() {
    const output = document.getElementsByClassName('output')[0];
    input.value = '';
    lowerCaseText.value = '';
    upperCaseText.value = '';
    for (item in data) {
        data[item] = 0;
    }
    for (i = 0; i < 9; i++) {
        output.getElementsByClassName('stat')[i].innerText = 0;
    }
}

function convertToLowercase() {
    lowerCaseText.value = input.value.toLowerCase();
}

function convertToUppercase() {
    upperCaseText.value = input.value.toUpperCase();
}