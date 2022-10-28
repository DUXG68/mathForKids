const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
var answer = 0;
var swap;
function generate_equation(){
 var num1 = Math.floor(Math.random()*30);
 var num2 = Math.floor(Math.random()*30);
 var dummyAnswer1 = Math.floor(Math.random()*30);
 var dummyAnswer2 = Math.floor(Math.random()*20);
 var allAnswer;
 var switchAnswer = [];

if(num1<num2){
swap=num1;
num1=num2;
num2=swap;
}
 
 answer = num1 - num2;

 document.getElementById("num1").innerHTML = num1;
 document.getElementById("num2").innerHTML = num2;

 allAnswer = [answer,dummyAnswer1,dummyAnswer2];

 for(i=allAnswer.length;i--;){
    switchAnswer.push(allAnswer.splice(Math.floor(Math.random()*(i+1)),1)[0]);
 }

 option1.innerHTML = switchAnswer[0];
 option2.innerHTML = switchAnswer[1];
 option3.innerHTML = switchAnswer[2];
}

option1.addEventListener("click",function(){
    if (option1.innerHTML == answer) {
        generate_equation()
    } else {
        document.getElementById("option1").innerHTML="X";
        audio.play()
    }
});
option2.addEventListener("click",function(){
    if (option2.innerHTML == answer) {
        generate_equation()
    } else {
        document.getElementById("option2").innerHTML="X";
        audio.play()
    }
});
option3.addEventListener("click",function(){
    if (option3.innerHTML == answer) {
        generate_equation()
    } else {
        document.getElementById("option3").innerHTML="X";
        audio.play()
    }
});
generate_equation();

