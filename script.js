

//  select a number
let check = document.getElementById('chooseVal');
let buttons = [b1, b2, b3, b4, b5, b6];
let chooseVal = 0;
let score=0;

buttons.forEach((parameter, index) => {
    parameter.addEventListener("click", function () {
        buttons.forEach((e, i) => {
            e.classList.remove("b");
            parameter.classList.add("b");
            chooseVal    = index + 1;

             
            chooseAno.innerText = "";            //red alert
          //  check.innerHTML = chooseVal;
           
        });

    });

});


//generate  random dice 

let Allimg = ["./img/d1.png", "./img/d2.png", "./img/d3.png", "./img/d4.png", "./img/d5.png", "./img/d6.png"];
let diceRolledVal;
let chooseAno = document.getElementById("chooseAno");
 let dice = document.getElementById("img");

dice.addEventListener("click", function () {
   
    if (chooseVal == 0) {
        chooseAno.innerText = "Please choose a number before play the game.";
       
    }
    else {
        chooseAno.innerText = "";
        let diceVal = (Math.floor(Math.random() * 6));
        dice.src = Allimg[diceVal]
        diceRolledVal = diceVal + 1;
           updateScore();
    }

   
   // check.innerHTML = diceRolledVal;
});



let scorebox = document.getElementById("score");

function updateScore(){
 
  if( diceRolledVal===chooseVal){
    score += 5;
  scorebox.innerText=score;
  }
else{
    score += -1;
    scorebox.innerText=score;
}

};


let resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener("click",function(){
    score=0;
    scorebox.innerText=score;
 dice.src="img/d1.png";

 buttons.forEach((p, index) => {
            p.classList.remove("b");
    
    });
    chooseVal=0;

});