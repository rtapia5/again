// class Entre{
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class Side{
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class Beverage{
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }
async function getMenu() {
    try {
        //fetech the json menu file:
        const menuData = await fetch('./src/menu.json');

        console.log(menuData);
        const menus = await menuData.json();

        console.log(menus);
    }
    catch(e) {
        console.log('Error', e);
    }

};
getMenu();


// const menuObj1 = JSON.parse('src/menu.json')
// console.log(menuObj1)

// const fs = require('fs');
// fs.readFile('.src/menu.json', 'utf8', (err, menuObj) => {
//      if(err){
//         console.log(err);
//         return;
//      }
//      console.log(JSON.parse(menuObj));
// })

// class Food {
//     constructor(name, price, type, calorie, description){
//         this.name = name;
//         this.price = price;
//         this.type = type;
//         this.calorie = calorie;
//         this.description =  description;
//     }
// }

// class Combo {
//     constructor(entre, side, beverage){
//         this.entre = entre;
//         this.side = side;
//         this.beverage = beverage;
//     }

//     function comboPrice(entre, side, beverage) {
//         return entre.price + side.price + beverage.price;
//     }
// }
