//rule box
let ruleBox =document.getElementById("rule");
let ShowRule =document.getElementById("ShowRule");
let cutIcon =document.getElementById("cutIcon");

ShowRule.addEventListener("click",function(){
    ruleBox.style.display="block";

  });

  cutIcon.addEventListener("click",function(){
    ruleBox.style.display="none";

  });