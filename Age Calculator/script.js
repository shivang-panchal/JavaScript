// function calculateAge(){
//     let day =parseInt(document.getElementById("day").value);
//     let month =parseInt(document.getElementById("month").value);
//     let year =parseInt(document.getElementById("year").value);

//     if(!day || !month || !year || day<1 || day>31 || month<1 || month>12 || year<1930 || year>2100){

//         showError();
//         return;
//     }

// }

// let dob = new Date(year, month -1,day);
// let today = new Date();
// let ageYears = today.getFullYear() - dob.getFullYear();
// let ageMonths = today.getMonth() - dob.getMonth();
// let ageDays = today.getDay() - dob.getDay();

// if(ageDays<0){
//     ageMonths --;
//     let lastMonthDays = new Date (today.getFullYear(), today.getMonth(), 0).getDate();
//     ageDays +=12;
// }
// if(ageMonths<0){
//     ageYears -- ;
//     ageMonths +=12;
    
//     displayAge(ageYears,ageMonths,ageDays);

//     setTimeout(clearInputs, 500);
// }

// function displayAge(years, months,days){
//     document.getElementById("years-box").innerText = `${years} \nyear`;
//     document.getElementById("months-box").innerText = `${months} \nmonth`;
//     document.getElementById("days-box").innerText = `${days} \nday`;
// }

// function showError(){
//     document.body.style.backgroundColor = "red";
//     setTimeout(()=>document.body.style.backgroundColor = "aliceblue", 500);
// }

// function clearInputs(){
//     document.getElementById("day").value = "";
//     document.getElementById("month").value = "";
//     document.getElementById("year").value = "";
// }


function calculateAge() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    // Validate input
    if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12 || year < 1930 || year > 2100) {
        showError();
        return;
    }

    let dob = new Date(year, month - 1, day);
    let today = new Date();

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // Adjust days if negative
    if (ageDays < 0) {
        ageMonths--;
        let lastMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += lastMonthDays;
    }

    // Adjust months if negative
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    displayAge(ageYears, ageMonths, ageDays);
    setTimeout(clearInputs, 500);
}

function displayAge(years, months, days) {
    document.getElementById("years-box").innerText = `${years} Y`;
    document.getElementById("Months-box").innerText = `${months} M`;
    document.getElementById("days-box").innerText = `${days} D`;
}

function showError() {
    document.body.style.backgroundColor = "red";
    setTimeout(() => document.body.style.backgroundColor = "aliceblue", 500);
}

function clearInputs() {
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
}

// Attach event listener to button
document.querySelector("button").addEventListener("click", calculateAge);
