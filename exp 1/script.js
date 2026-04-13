function getMarks() {
    let n = document.getElementById("subjects").value;
    let marksDiv = document.getElementById("marksInput");

    marksDiv.innerHTML = "";

    for (let i = 1; i <= n; i++) {
        marksDiv.innerHTML += `
            <input type="number" placeholder="Enter marks for Subject ${i}" id="mark${i}">
        `;
    }
}

function calculateResult() {
    let n = document.getElementById("subjects").value;
    let total = 0;

    for (let i = 1; i <= n; i++) {
        let mark = Number(document.getElementById(`mark${i}`).value);
        total += mark;
    }

    let average = total / n;

    let grade = "";
    let result = "";

    // Grade Calculation
    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "F";

    // Pass/Fail
    if (average >= 40) result = "Pass";
    else result = "Fail";

    document.getElementById("result").innerHTML = `
        Total Marks: ${total} <br>
        Average: ${average.toFixed(2)} <br>
        Grade: ${grade} <br>
        Result: ${result}
    `;
}