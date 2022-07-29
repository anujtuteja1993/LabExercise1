function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dice()
{   
    let Value = document.getElementById("dice");
    let side = Value.options[Value.selectedIndex].value;
    let result = generateRandomIntegerInRange(1,side);
    document.getElementById("roll").innerHTML = result;
    //element = document.getElementsByClassName("result");
    //element.classList.add("transform");
}
