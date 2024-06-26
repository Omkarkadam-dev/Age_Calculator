let inputBtn = document.querySelector("age-dob-input");
let btn = document.querySelector(".btn");
let ageResult = document.querySelector(".result");



btn.addEventListener("click",()=>{
    if(inputBtn.value===""){
        alert("Please enter your age or date of birth");
    } else {
        console.log(inputBtn.value);
        let dob = new Date(inputBtn.value);
        console.log(dob);

        let dob_year = dob.getFullYear();
        console.log(dob_year);

        //current
        let now = new Date();
        console.log(now);
        let now_year = nom.getFullYear();
        console.log(now_year);

        let age = now_year - dob_year;
        console.log(age); 

        ageResult.textContent = 'Your age is : ${age}';

    }
})