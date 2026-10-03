// const userEle = document.getElementById('username');
// const passWord = document.getElementById('password');
// const submitBtn = document.getElementById('submit');
// const result = document.getElementById('result');
//
//
// //grab the value when you need it, putting it on the consts will store the value as nothing/empty
// // use && for another statement but use || if only one part of the statement has to be true
// // else if is a second question in one question
//
// submitBtn.addEventListener('click', (e) => {
//     const checker = false;
//     // if (userEle.value === "potato" && passWord.value === "password") {
//     //     result.innerHTML = "you are now logged in!";
//     // }else{
//     //     result.innerHTML = "Username is incorrect";
//     // }
//
//     const question = userEle.value === "potato";
//     console.log(question);
//
//     if (userEle.value === "potato" || passWord.value === "password" || userEle.value === "tomato") {
//         result.innerHTML = "you are now logged in!";
//     }else{
//         result.innerHTML = "Username is incorrect";
//     }
//
//     if(userEle.value === userEle.value.toUpperCase()) {
//         console.log("If uppercase")
//     }else if(userEle.value === userEle.value.toLowerCase()){
//         console.log("It lowercase")
//     } else {
//         console.log("It has a mix of upper and lower case")
//     }
//
//

    // result.innerHTML = userEle.value + passWord.value;
// })

// const cageEle = document.getElementById("cage");
//
// const randomNumber = Math.floor(Math.random() * 16)+5;
//
// console.log (randomNumber)

// in class work above


//My Work Below

const hpdisplay = document.getElementById("hpdisplay");
const attack = document.getElementById("attack")
const result = document.getElementById("result");
const tryagain = document.getElementById("tryagain");

let hp = 100

attack.addEventListener("click", (e) => {

    // let damage = Math.floor(Math.random()*25)+5;
    //
    // hp = hp - damage;

    let chance = Math.random();
    if (chance > 0.9) {
        result.textContent = "Attack Missed!";} else {

        let damage = Math.floor(Math.random()*16)+5;

        hp = hp - damage;

        if (hp <= 0 ) {
            hp = 0;
            result.textContent = "Rest in peace" } else { result.textContent = "Your hp is now " + hp; }
    }

    hpdisplay.textContent = hp;

})

tryagain.addEventListener("click", (e) => {


    hp = 100

    hpdisplay.textContent = hp;


})


