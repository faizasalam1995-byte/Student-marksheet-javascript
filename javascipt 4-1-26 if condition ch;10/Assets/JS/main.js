// // //var specs = prompt("where does pop live")

// // // if (spec=== "Karachi") {
// // // alert("correct answer")
// // //}
// // // else{
// //     // alert("Please try again")
// //     //}


// // //     let number = 7;

// // // if (number % 2 === 0) {
// // //     console.log("The number is Even");
// // // } else {
// // //     console.log("The number is Odd");
// // // }

// let num = -5;

// if (num > 0) {
//     console.log("Number is Positive");
// } else if (num < 0) {
//     console.log("Number is Negative");
// } else {
//     console.log("Number is Zero");
// }


// // let marks = 82;

// // if (marks >= 90) {
// //     console.log("Grade: A+");
// // } else if (marks >= 80) {
// //     console.log("Grade: A");
// // } else if (marks >= 70) {
// //     console.log("Grade: B");
// // } else if (marks >= 60) {
// //     console.log("Grade: C");
// // } else {
// //     console.log("Grade: Fail");
// // }


function generateMarkSheet() {
    //get subject marms
    let urdu = Number(document.getElementById("urdu").value);
    let english = Number(document.getElementById("english").value);
    let science = Number(document.getElementById("science").value);
    let computer = Number(document.getElementById("computer").value);
    let maths = Number(document.getElementById("maths").value);


    let resultDiv = document.getElementById("result");

    //total percentage calculate
    let total = urdu + english + science + computer + maths;

    let percentage = total/5

    //grade decide use if- else condition

    let grade = "";
    let status = "";

    if(percentage >= 90){
        grade = "A+";
        status = "Top"
    }
    else if (percentage >= 80){
        grade = "A";
        status = "Pass"
    }
    else if (percentage >= 70) {
        grade = "B";
        status = "Pass"
    }

    else if (percentage >= 60){
        grade = "C";
        status = "Pass"
    }
    else if (percentage >= 50){
        grade = "D";
        status = "Pass"
    }
    else {
        grade = "F";
        status = "Fail"
    }
    //fail check : agr kise subject me 33 se kam number hai to fail hai ( || is nishan ko or k lye use krte hai)
    if (urdu < 33 || english < 33 || science < 33 || computer < 33 || maths < 33){
        status = "Fail in this subject"
    }

     // result show
     resultDiv.innerHTML = `<strong>Total Marks</strong> ${total}/400
     <br> <strong>Percentage:</strong> ${percentage.toFixed(2)} % <br>
     <strong>Grade:</strong> ${grade} <br> 
     <strong>Result:</strong> ${status}`;
}

