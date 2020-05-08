var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";

	//css at the bottom
	css.textContent = body.style.background+";"; //text content will add text  

}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);//we no need to call the function because this iput event is triggered automatically and the second parameter autmatically ran with the event


//tasks:
// 1) grapped the content from input color 1&2 and stored in var color1&2
// 2)want to addEventListener to color 1&2. based on user input it should perform actions
// 3) user want to see the background color based on his/her input:
//    for that we gave a id(gradient) to body and added linear-gradient to that,,to see the desired output