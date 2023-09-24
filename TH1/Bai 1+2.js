window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    // 1. Store Mark's and John's mass and height in variables
    let heightMark = parseFloat(document
        .querySelector("#heightMark").value);

    let weightMark = parseInt(document
        .querySelector("#weightMark").value);

    let heightJohn = parseFloat(document
        .querySelector("#heightJohn").value);

    let weightJohn = parseInt(document
        .querySelector("#weightJohn").value);
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)

    let bmiMark = (weightMark / (((heightMark.toFixed(2)*100) * (heightMark.toFixed(2)*100)) /
        10000)).toFixed(2);

    let bmiJohn = (weightJohn / (((heightJohn.toFixed(2)*100) * (heightJohn.toFixed(2)*100)) /
        10000)).toFixed(2);
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

    let markHigherBMI = Boolean(bmiMark > bmiJohn)
    let result = document.querySelector("#result1");
    
    
    if (markHigherBMI) {
        result.innerHTML = "Mark's BMI is higher than John's!  ";
        document.querySelector("#result2").innerHTML = "Mark'sBMI ("+bmiMark+") is higher than John's ("+bmiJohn+")!";
    }
    else {
        result.innerHTML = "John's BMI is higher than Mark's!";
        document.querySelector("#result2").innerHTML = "John'sBMI ("+bmiJohn+") is higher than Mark's ("+bmiMark+")!";
    }
}
