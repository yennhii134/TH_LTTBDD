window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", findwinner);
};

function findwinner(){
    let dolphins1 = parseInt(document.querySelector("#dolphins1").value);

    let dolphins2 = parseInt(document.querySelector("#dolphins2").value);

    let dolphins3 = parseInt(document.querySelector("#dolphins3").value);

    let koalas1 = parseInt(document.querySelector("#koalas1").value);

    let koalas2 = parseInt(document.querySelector("#koalas2").value);

    let koalas3 = parseInt(document.querySelector("#koalas3").value);

// 1. Calculate the average score for each team, using the test data below
    let dolphinAverage = ((dolphins1 + dolphins2 + dolphins3) / 3).toFixed(2);
    let koalasAverage = ((koalas1 + koalas2 + koalas3) / 3).toFixed(2);

    document.querySelector("#result").innerHTML= "Dolphins'Average: " + dolphinAverage + " and Koalas'Average: " + koalasAverage;

    let teamwin = document.querySelector("#teamwin");

//     2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

    if (dolphinAverage < 100 && koalasAverage < 100)
        teamwin.innerHTML = "Dolphins and Koalas is less than 100 score "
    else if (dolphinAverage < 100)
        teamwin.innerHTML = "Dolphins is less than 100 score <br> Koalas win" ;
    else if (koalasAverage < 100) 
        teamwin.innerHTML = "Koalas is less than 100 score <br> Dolphins win";
    else {
        if (dolphinAverage == koalasAverage)
            teamwin.innerHTML = "Both teams draw";
        else if (koalasAverage < dolphinAverage)
            teamwin.innerHTML = "Dolphins win";
        else
            teamwin.innerHTML = "Koalas win";
    }
}
