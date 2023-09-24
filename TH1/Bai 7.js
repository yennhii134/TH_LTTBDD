window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", main);
};

function main() {

    const person1 = {
        fullName : document.querySelector("#fullName1").value,
        weight : parseInt(document.querySelector("#weight1").value),
        height : parseFloat(document.querySelector("#height1").value),
        calcBMI : function() {
            return (this.weight / (((this.height.toFixed(2)*100) * (this.height.toFixed(2)*100)) / 10000)).toFixed(2)
        }
    }

    const person2 = {
        fullName : document.querySelector("#fullName2").value,
        weight : parseInt(document.querySelector("#weight2").value),
        height : parseFloat(document.querySelector("#height2").value),
        calcBMI : function() {
            return (this.weight / (((this.height.toFixed(2)*100) * (this.height.toFixed(2)*100)) / 10000)).toFixed(2)
        }
    }

    let result = document.querySelector("#result")

    return (person1.calcBMI() > person2.calcBMI()) 
    ? result.innerHTML = person1.fullName + "'s BMI (" + person1.calcBMI() + ") is higher than " + person2.fullName + "'s BMI (" + person2.calcBMI() + ")"
    : result.innerHTML = person2.fullName + "'s BMI (" + person2.calcBMI() + ") is higher than " + person1.fullName + "'s BMI (" + person1.calcBMI() + ")"
}