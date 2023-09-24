window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", checkWinter);
};

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
function calcAverage(score1, score2, score3){
    return ((score1+score2+score3)/3).toFixed(2);
}

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.

function checkWinter(){
    let dolphins1 = parseInt(document.querySelector("#dolphins1").value);

    let dolphins2 = parseInt(document.querySelector("#dolphins2").value);

    let dolphins3 = parseInt(document.querySelector("#dolphins3").value);

    let koalas1 = parseInt(document.querySelector("#koalas1").value);

    let koalas2 = parseInt(document.querySelector("#koalas2").value);

    let koalas3 = parseInt(document.querySelector("#koalas3").value);

    let avgDolphins = calcAverage(dolphins1,dolphins2,dolphins3);
    let avgKoalas = calcAverage(koalas1,koalas2,koalas3);

    let result = document.querySelector("#result")

    if (avgDolphins*2 <= avgKoalas)
        result.innerHTML = "Koalas win ("+ avgKoalas + " vs. Dolphins " + avgDolphins + ")"
    else if (avgKoalas*2 <= avgDolphins)
        result.innerHTML = "Dolphins win ("+ avgDolphins + " vs. Koalas " + avgKoalas + ")"
    else 
      result.innerHTML = " Dolphins: " + avgDolphins + ", Koalas: " + avgKoalas + "<br>No team wins"

    //   return (avgDolphins*2 <= avgKoalas) ?  result.innerHTML = "Koalas win ("+ avgKoalas + " vs. Dolphins " + avgDolphins + ")" :
    //         (avgKoalas*2 <= avgDolphins) ? result.innerHTML = "Dolphins win ("+ avgDolphins + " vs. Koalas " + avgKoalas + ")" :
    //                                         result.innerHTML = " Dolphins: " + avgDolphins + ", Koalas: " + avgKoalas + "<br>No team wins"


}