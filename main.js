// const DOM = document.getElementById.bind(document);
//
// const domInpName = DOM("inpName");
// const domInpSurname = DOM("inpSurname");
// const domConResult = DOM("conResult");




// |
// domInpName.oninput = function (event) {
//     console.log('onInpNameInput:', { event });
//     renderFullName();
// };
// domInpSurname.oninput = function (event) {
//     console.log('onInpNameInput:', { event });
//     renderFullName();
// };
//
//
// const getFullName = () => `${domInpName.value} ${domInpSurname.value}`;
//
// function renderFullName() {
//     const fullName = getFullName();
//     console.log("renderFullName:", { fullName });
//     domConResult.textContent = fullName;
// }
//
//
// console.log(domInpName, domInpSurname);

// |
// function  add(a, b = 5) {
//     const result = a + b;
//     // console.log('add:', a, b, result);
//     // console.log('add: ${a} | ${b} | ${result}');
//     console.log('add:', {a, b, result });
//     return result;
// };
// const addResult = add(10);
// console.log('addResult:', { addResult });



// |
// event.stopPropagation(); Останавливает Event
//
// let name = 'Aleksey';
// let year = 1989;
// let isHappy = true;
//
// name = 'John Maxwell ${year + year}';
//
// let febonachi = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];
// let arr = new Array(10);
//
// class Location {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
//
// class User {
//     constructor(name, year, location) {
//         this.name = name;
//         this.location = location;
//         this.year = year;
//     }
// }
//
// let user1 = new User("Aleksey", 1989);
// let user2 = new User("Andrey", 1980), new Location;
//
// const domApp = document.body.children[0];
// domApp.style.backgroundColor = "#ffcc00"
// domApp.textContent = user1.name;
//
// console.log(document.body.first


const appendBlock = (block) => document.getElementById("app").appendChild(block);
const randomRange = (min, max) => Math.floor (Math.random() * (max - min) + min)
const generateColor = () => {
    const isNotEmpty = Math.random() > 0.5;
    if (isNotEmpty) {
        return "black";
    }
    return null;
}
const createBlock = (x, y, size, color) => {
    const result = document.createElement("div");
    if (color) {
            result.style.backgroundColor = "color";
        }
    console.log(x, y);
    result.style.width = result.style.height = `${size}px`;
    result.style.position = "absolute";
    result.style.left = `${x}px`;
    result.style.top = `${y}px`;
    return result;
};

const BLOCK_SIZE = 50;
const DIMENSION = 3;

let columns = DIMENSION;
let rows = columns * 2;
let xPos = 0;
let yPos = 0;


while (rows-- > 0) {
    let line = [];
    xPos = 0;
    columns = DIMENSION;
    while (columns-- > 0) {
        const color = generateColor();
        const block = createBlock(xPos, yPos, BLOCK_SIZE, color);
        line.push(color);
        xPos += BLOCK_SIZE;
        appendBlock(block);
    }

    line.reverse().forEach((color) => {
        const block = createBlock(xPos, yPos, BLOCK_SIZE, color);
        appendBlock(block);
        xPos += BLOCK_SIZE;
    });
    yPos += BLOCK_SIZE;
}

