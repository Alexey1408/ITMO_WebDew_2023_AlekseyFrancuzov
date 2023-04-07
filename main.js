const DOM = document.getElementById.bind(document);

const domInpName = DOM("inpName");
const domInpSurname = DOM("inpSurname");
const domConResult = DOM("conResult");

// function  add(a, b = 5) {
//     const result = a + b;
//     // console.log('add:', a, b, result);
//     // console.log('add: ${a} | ${b} | ${result}');
//     console.log('add:', {a, b, result });
//     return result;
// };
// const addResult = add(10);
// console.log('addResult:', { addResult });



domInpName.oninput = function (event) {
    console.log('onInpNameInput:', { event });
    renderFullName();
};
domInpSurname.oninput = function (event) {
    console.log('onInpNameInput:', { event });
    renderFullName();
};


const getFullName = () => `${domInpName.value} ${domInpSurname.value}`;

function renderFullName() {
    const fullName = getFullName();
    console.log("renderFullName:", { fullName });
    domConResult.textContent = fullName;
}


console.log(domInpName, domInpSurname);







// event.stopPropagation(); Останавливает Event

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