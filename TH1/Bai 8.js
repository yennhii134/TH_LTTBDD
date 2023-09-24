// 1. Create an array 'bills' containing all 10 test bill values
const bills = [22,295,176,440,37,105,10,1100,86,52];

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = []
const total = []

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
function calcTip(billValue){
    let tipValue = (billValue >= 50 && billValue <= 300) ? 0.15 : 0.2;
    return billValue*tipValue;
}

// Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
// This function calculates the average of all numbers in the given array
function calcAverage(){
    let sum = 0
    for (let i = 0; i < bills.length; i++){
        tips[i] = calcTip(bills[i])
        total[i] = bills[i] + tips[i]
        sum = sum + total[i]
    }
    return sum/bills.length
}

window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", main);
};

function main(){
    document.getElementById("result").innerHTML = "Tip calculator of bills array [" + bills + "] is:  " + calcAverage()
    console.log("Tip calculator of bills array [" + bills + "] is:  " + calcAverage())
}

