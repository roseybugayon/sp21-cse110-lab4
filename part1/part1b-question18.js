let d = new Date();
let time = d.toLocaleDateString();
var intervalID = setInterval(printOut, 1000, time);

function printOut(time) {
    console.log(time);
}