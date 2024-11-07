// 1 closest furthest

// let q = Number(prompt("Please enter the first number: "));
// let w = Number(prompt("Please enter the second number: "));
// let e = Number(prompt("Please enter the third number: "));

// let counts = [q, w, e];

function findClosestAndFurthest() {
    const goal = 100;

    let closestIndex = 0;
    let furthestIndex = 0;

    for (let i = 1; i < counts.length; i++) {
        if (Math.abs(counts[i] - goal) < Math.abs(counts[closestIndex] - goal)) {
            closestIndex = i;
        }
        if (Math.abs(counts[i] - goal) > Math.abs(counts[furthestIndex] - goal)) {
            furthestIndex = i;
        }
    }

    document.getElementById("closestResult").textContent = counts[closestIndex];
    document.getElementById("furthestResult").textContent = counts[furthestIndex];
}

// 2 alphabetical order

function alpha() {

  let input = document.getElementById('sentenceInput').value;

  arr = input.split(" ")
  sortedWords = []

  for (let i =0; i<arr.length; i++) {
    sortedWords[i] = arr[i].split('').sort().join('')
  }

  result = sortedWords.join(' ');



  document.getElementById('alphaResult').textContent = result;
}

// 3 first not repeated

function unique() {
    input = document.getElementById('uWord').value

    arr = input.split('')
    count = 0

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let k = 0; k < arr.length; k++) {
            if (arr[i] === arr[k]) {
                count++;
            }
        }


        if (count === 1) {
            result = arr[i];
            break;
        }
    }

    document.getElementById('uResult').innerHTML = result
}

// 4

function moveChar() {
    input = document.getElementById('mWord').value

    result = input.split('').map(char => String.fromCharCode(char.charCodeAt(0)+1)).join('')

    document.getElementById('mResult').innerHTML = result
}

// 5

function findLongestAndShortest() {

    let word1 = prompt("Please enter the first word:");
    let word2 = prompt("Please enter the second word:");
    let word3 = prompt("Please enter the third word:");

    const words = [word1, word2, word3];


    let longestIndex = 0;
    let shortestIndex = 0;


    for (let i = 1; i < words.length; i++) {
        if (words[i].length > words[longestIndex].length) {
            longestIndex = i;
        }
        if (words[i].length < words[shortestIndex].length) {
            shortestIndex = i;
        }
    }

    
    document.getElementById("longestWord").textContent = words[longestIndex];
    document.getElementById("shortestWord").textContent = words[shortestIndex];
}

// 6
function highlightWords() {
    const paragraph = document.getElementById("paragraph");
    const words = paragraph.innerHTML.split(" ");
    const highlightedWords = words.map(word => {
        if (word.length > 7) {
            return `<span style="background-color: blue;">${word}</span>`;
        } else if (word.length < 3) {
            return `<strong>${word}</strong>`;
        }
        return word;
    });
    paragraph.innerHTML = highlightedWords.join(" ");
}

// 7
function replaceCharacters() {
    const para = document.getElementById("replacePara");
    para.innerHTML = para.innerHTML.replace(/\?/g, '*').replace(/!/g, '@');
}

// 8
function splitSentences() {
    const para = document.getElementById("splitPara");
    const sentences = para.innerHTML.split(/[\.\?!]+/).map(sentence => sentence.trim()).filter(Boolean);
    para.innerHTML = sentences.join("<br>");
}

// 9
function countWords() {
    const para = document.getElementById("countPara");
    const wordCount = para.innerHTML.trim().split(/\s+/).length;
    alert("Word count: " + wordCount);
}

// 10
function highlightSpecificWords() {
    const para = document.getElementById("specificWordsPara");
    const words = para.innerHTML.split(" ");
    const highlighted = words.map(word => {
        if (word.startsWith("a")) {
            return `<em>${word}</em>`;
        } else if (word.endsWith("y")) {
            return `<u>${word}</u>`;
        }
        return word;
    });
    para.innerHTML = highlighted.join(" ");
}

// 11 Calculate volume of a sphere
function calculateSphereVolume() {
    const radius = parseFloat(document.getElementById('sphereRadius').value);
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('sphereVolume').textContent = volume.toFixed(2);
}

// 12 Calculate volume of a cylinder
function calculateCylinderVolume() {
    const radius = parseFloat(document.getElementById('cylinderRadius').value);
    const height = parseFloat(document.getElementById('cylinderHeight').value);
    const volume = Math.PI * Math.pow(radius, 2) * height;
    document.getElementById('cylinderVolume').textContent = volume.toFixed(2);
}

// 13 Calculate volume of a cone
function calculateConeVolume() {
    const radius = parseFloat(document.getElementById('coneRadius').value);
    const height = parseFloat(document.getElementById('coneHeight').value);
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    document.getElementById('coneVolume').textContent = volume.toFixed(2);
}

// 14 Calculate volume of a prism
function calculatePrismVolume() {
    const baseArea = parseFloat(document.getElementById('prismBaseArea').value);
    const height = parseFloat(document.getElementById('prismHeight').value);
    const volume = baseArea * height;
    document.getElementById('prismVolume').textContent = volume.toFixed(2);
}

// 15 Calculate area of a triangle
function calculateTriangleArea() {
    const base = parseFloat(document.getElementById('triangleBase').value);
    const height = parseFloat(document.getElementById('triangleHeight').value);
    const area = (1 / 2) * base * height;
    document.getElementById('triangleArea').textContent = area.toFixed(2);
}

// 16 sidebar

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

// 17 calendar

const monthYearElement = document.getElementById('month-year');
const weekdayDayElement = document.getElementById('weekday-day');


const today = new Date();
const day = today.getDate();
const month = today.toLocaleString('default', { month: 'long' });
const year = today.getFullYear();
const weekday = today.toLocaleString('default', { weekday: 'long' });


monthYearElement.innerText = `${month} ${year}`;

weekdayDayElement.innerText = `${weekday}, ${day}`;

// 18 drag drop
// in html
