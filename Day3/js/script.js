// // 

// // var value1 = document.getElementById("butt");
// // var button = document.getElementById("button1");
// // console.log(value1.value)
// // button.addEventListener('click', convertToHours);
// // function convertToHours() {
// //     var hour = value1.value / 60;
// //     console.log(hour);

// // }

// function increment() {
//     var value1 = document.getElementById("butt").value;
//     console.log(value1);
//     var para = document.getElementById("ab");

//     para.innerHTML = value1;
// }


// var button = document.getElementById("button1");
// button.addEventListener('click', increment);


let values = { a: 4, b: 8 }
let sum = (x, y) => x + y;
let { a, b } = values;
console.log(`sum of ${a} and${b} is ${sum(values.a,values.b)}`)