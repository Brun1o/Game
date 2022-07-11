// function changeStyle(class_name, property = none, value = none) {
//     var class_name = "game"
//     var elements = document.getElementsByClassName(class_name);
//     for (var i = 0; i < elements.length; i++) {
//         // elements[i].style[property] = value;
//         v = elements[i].style[property];
//         console.log("this is v:" + v)
//     }
// }

var speed = 25;
let changeStyle = function() {
    console.log(123)
    var class_name = "game"
    var elements = document.getElementsByClassName(class_name);
    console.log(elements[0])
    console.log(elements[0].style.animationDuration)
    speed += 5;
    elements[0].style.animationDuration = speed + "s";
    // for (var i = 0; i < elements.length; i++) {
    //     // elements[i].style[property] = value;
    //     v = elements[i].style[property];
    //     console.log("this is v:" + v)
    // }
}

let changeSpeed = function(n) {
    var ele = document.getElementsByClassName("game");
    speed += n
    ele[0].style.animationDuration = speed + "s";
}
