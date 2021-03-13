// const bmi = (weight, height) =>{
//     return weight/ height **2
// }

let form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    let bmi = document.querySelector("#bmi")
    let status = document.querySelector("#status")

    let bmiValue = (weight/ height **2).toFixed(2);

    bmi.textContent = " YOUR BMI IS" + bmiValue
    
    if (bmiValue > 24) {
        status.textContent = "YOUR STATUS IS OVERWEIGHT."
    }else if(bmiValue < 18.5){
        status.textContent = "YOUR STATUS IS UNDERWEIGHT."
    }else{
        status.textContent = "YOUR STATUS IS NORMAL."
    }
})