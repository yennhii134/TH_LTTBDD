window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", main);
};

// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above

function calcTip(billValue){
    let tipValue = (billValue >= 50 && billValue <= 300) ? 0.15 : 0.2;
    return billValue*tipValue;
}

// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

function main(){
    const bills = [125,555,44]
    const tips = []
    const total = []
    for (let i = 0; i < bills.length; i++){
        tips[i] = calcTip(bills[i])
        total[i] = bills[i] + tips[i]
    }

    let string = ""
    for (let i = 0; i < bills.length; i++){
        string += "The bill " + (i+1) + " was " + bills[i] + ", the tip was " + tips[i] + ", and the total value " + total[i] + "<br>"
    }

    let result = document.querySelector("#result")
    result.innerHTML = string
    
}
