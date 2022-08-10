var trials=0;
function startEasy()
{
	var d1=document.getElementById("div1").style;
	d1.visibility="hidden";
	var sqr=document.getElementById("sqrn").style;
	sqr.visibility="visible";
	startStop();
    trials++;
}
var fruits=[];
function startHard()
{
    var d1=document.getElementById("div1").style;
    var f1=document.getElementById("water").style;
    var f2=document.getElementById("man").style;
    var f3=document.getElementById("app").style;
    var f4=document.getElementById("bomb").style;
    fruits=[f1,f2,f3,f4];
    var d1=document.getElementById("div1").style;
	d1.visibility="hidden";
    disableAll();
	startStop();
    clickFruit();
   
}
function refresh()
{
    location.reload();
}
function disableAll()
{
    var f1=document.getElementById("water").style;
    var f2=document.getElementById("man").style;
    var f3=document.getElementById("app").style;
    var f4=document.getElementById("bomb").style;
    f1.visibility="hidden";
    f2.visibility="hidden";
    f3.visibility="hidden";
    f4.visibility="hidden";
}
var previousFruitIndex=-1;
function clickFruit()
{
    var f1=document.getElementById("water").style;
    var f2=document.getElementById("man").style;
    var f3=document.getElementById("app").style;
    var f4=document.getElementById("bomb").style;
    fruits=[f1,f2,f3,f4];
    fruitAppear();
}
function fruitAppear()
{
    var min=0;
    var max=3;
    var fruitindex=Math.floor(Math.random() * (max - min + 1)) + min;
    var fruit=fruits[fruitindex];
    disableAll();
    var f4=document.getElementById("bomb").style;
    if(fruitindex=3)
    {
        setTimeout("bombDisappear();",2000);
    }
    else
    {
        fruit.visibility="visible";
        fruit.top=400*Math.random();
        fruit.left=600*Math.random();
        previousFruitIndex=fruitindex;
    }
    
}
function bombDisappear()
{
    var f4=document.getElementById("bomb").style;
    f4.visibility="hidden";
    
}
function clickBomb()
{
    tOut2();
}
function rand()
{
	var sqr=document.getElementById("sqrn").style;
	sqr.top=500*Math.random();
	sqr.left=1000*Math.random();
	setTimeout(tOut, 30000);
	incrementClick();
	var avg=value/seconds;
	document.getElementById("counter-label").innerHTML = "No. of shots:" + value;
	document.getElementById("counter-label1").innerHTML = "Current Precision Rate: "+ avg.toFixed(2)+" Shots/s";
}
function tOut2()
{
    document.getElementById("counter-label3").innerHTML = "TASK FAILED ! TRY AGAIN !";
    reset();
    document.getElementById("div1").visibility="visible";
    document.getElementById("restartBtn").visibility="visible";
}
function tOut()
{
	var sqr=document.getElementById("sqrn").style;
	sqr.visibility="hidden";
	reset();
    var avg=value/30;
    document.getElementById("counter-label2").innerHTML = "Average: "+ avg.toFixed(2)+ " Shots/s";
}
var counterVal = 0;
function incrementClick() {
    updateDisplay(++counterVal);
}


function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}
let value=0;
function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
    value=val;
}
//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let isStopped = true;

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").value = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}



function startStop(){

    if(isStopped){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        isStopped = false;

    }
    else{

        window.clearInterval(interval);
        isStopped = true;

    }

}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").value = "00:00:00";

}
var startTime=new Date();
var endTime=new Date();
var startPressed=false;
var bgChangeStarted=false;
var maxWait=5;
var timerID;
var n;

function startTest()
{
	document.body.style.background=document.response.bgColorChange.options[
	document.response.bgColorChange.selectedIndex].text;
	bgChangeStarted=true;
	startTime=new Date();
}
function remark(responseTime)
{
	var responseString="";
	if (responseTime < 0.15)
		responseString="Graded: A+";
	if (responseTime >= 0.15 && responseTime < 0.20)
		responseString="Graded: A";
	if (responseTime >=0.20 && responseTime < 0.30)
		responseString="Graded: B+";
	if (responseTime >=0.30 && responseTime < 0.40)
		responseString="Graded: B";
        if (responseTime >=0.40 && responseTime < 0.60)
		responseString="Graded: C";
	if (responseTime >=0.60 && responseTime < 0.8)
		responseString="Graded: D";
        if (responseTime >=0.80 && responseTime < 1)
		responseString="Graded: E";
	if (responseTime >=1)
		responseString="Graded: F";
	return responseString;
}

function stopTest()
{
	
	if(bgChangeStarted)
	{
		endTime=new Date();
		var responseTime=(endTime.getTime()-startTime.getTime())/1000;
		document.body.style.background="black";	
		alert("Your response time is: " + responseTime +" seconds " + "\n" + remark(responseTime));
		startPressed=false;
		bgChangeStarted=false;
	}
	else
	{
		if (!startPressed)
		{
			alert("press start first to start test");
		}
		else
		{	
			clearTimeout(timerID);
			startPressed=false;			
			alert("Invalid Press, please start again.");
		}			
	}

}


var randMULTIPLIER=0x015a4e35;
var randINCREMENT=1;
var today=new Date();
var randSeed=today.getSeconds();
function randNumber()
{
	randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
	return((randSeed >> 15) & 0x7fff) / 32767;
}

function startit()
{
	if(startPressed)
	{
		alert("Already started. Press stop to stop");
		return;
	}
	else
	{
		startPressed=true;
		timerID=setTimeout('startTest()', 6000*randNumber());
	}
}
