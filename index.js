function addTwoNumbers () {
    let x = document.getElementById('X').value;
    let y = document.getElementById('Y').value;
    document.getElementById("sum-output").textContent = (+x + +y);
}

function sumList () {
    let numList = document.getElementById('numList').value;
    numList = numList.split("");
    let sumList = 0;
    for(let i = 0; i < numList.length; i++){
        sumList += +numList[i];
    }
    document.getElementById("sumList-output").textContent = `The total sum of ${numList} is: ${sumList}`;
}

function findWord () {
    let sentence = document.getElementById('sentence').value;
    let word = document.getElementById('word').value;

    if(sentence.indexOf(word) !== -1) {
        document.getElementById('findWord-output').textContent = `The word you were looking for "${word}" is located at the index of ${sentence.indexOf(word)} in your sentence "${sentence}".`;
    } else {
        document.getElementById('findWord-output').textContent = `Unfortunately, "${word}" was not located in your sentence: "${sentence}".`;
    }
    
}

function add7 () {
    let num = document.getElementById('add7').value;
    document.getElementById('add7-output').textContent = +num + 7;
}

let multiply = () => {
    let a = document.getElementById('A').value;
    let b = document.getElementById('B').value;
    document.getElementById('multiply-output').textContent = +a * +b;
}

let capitalize = () => {
    let word = document.getElementById('capitalizeWord').value;
    document.getElementById('capitalizeWord-output').textContent = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

let lastLetter = () => {
    let str = document.getElementById('lastLetter').value;
    document.getElementById("lastLetter-output").textContent = str.slice(-1);
}