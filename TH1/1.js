window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    var heightMark = parseInt(document
        .getElementById("#heightMark").value);

    var weightMark = parseInt(document
        .getElementById("#weightMark").value);

    var heightMark = parseInt(document
        .getElementById("#heightJohn").value);

    var weightMark = parseInt(document
        .getElementById("#weightJohn").value);

    let bmiMark = (weightMark / ((heightMark * heightMark) /
        10000)).toFixed(2);

    let bmiJohn = (weightJohn / ((heightJohn * heightJohn) /
        10000)).toFixed(2);

    let markHigherBMI = Boolean(bmiMark > bmiJohn)
    document.getElementById("#result").innerHTML = markHigherBMI;
}
calculateBMI()