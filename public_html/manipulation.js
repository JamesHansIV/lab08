const toRGB = function (red, green, blue) {
    return ("rgb(" + red + ", " + green + ", " + blue + ")");
}


const changeBorder = function () {
    let para = document.getElementById("para"); //get paragraph
    let inputs = document.getElementById("border-div").getElementsByTagName("input"); //get inputs from DOM
    let color = toRGB(inputs[0].value, inputs[1].value, inputs[2].value); //create color array
    para.style.borderColor = color; //update color
    para.style.borderWidth = inputs[3].value + "px"; //set border width
}

const changeColor = function () {
    let para = document.getElementById("para"); //get paragraph
    let inputs = document.getElementById("color-div").getElementsByTagName("input"); //get inputs
    let color = toRGB(inputs[0].value, inputs[1].value, inputs[2].value); //create color array
    para.style.background = color; //update color
}

