function generateRandomIntegerInRange(min, max)                 //function to generate a random number between min and max values
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dice()                                                 //function to get the dice type and update the HTML with the generated value
{   
    let Value = document.getElementById("dice");
    let side = Value.options[Value.selectedIndex].value;
    let result = generateRandomIntegerInRange(1,side);
    document.getElementById("roll").innerHTML = result;
}
