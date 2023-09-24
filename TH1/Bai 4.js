window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calulateBill);
};

function calulateBill(){
    let billValue = parseInt(document.querySelector("#billValue").value);

    let tipValue = (billValue >= 50 && billValue <= 300) ? 0.15 : 0.2;
    let total = billValue + billValue*tipValue;

    let result = document.querySelector("#result")
    result.innerHTML = "The bill was " + billValue + ", the tip was " + (billValue*tipValue).toFixed(2) + ", and the total value " + total;
    console.log("The bill was " + billValue + ", the tip was " + (billValue*tipValue).toFixed(2) + ", and the total value " + total)
}

