

function domloaded_add_first(){
    demo_init1();
}

var canvas1 = document.getElementById('canvas1');
var context1 = canvas1.getContext('2d');
	context1.fillStyle = "#FFF";
	context1.fillRect(0, 0, 600, 400);


//var arr = [2,3,4,5,10];
//show fractions in the table
var add_b1 = den[Math.floor(Math.random()*den.length)];
var add_a1=Math.floor(Math.random()*(add_b1-1))+1;
var add_d1 = den[Math.floor(Math.random()*den.length)];
var add_c1=Math.floor(Math.random()*(add_d1-1))+1;
document.getElementById("add_numerator1").innerHTML = add_a1;
document.getElementById("add_denominator1").innerHTML = add_b1;
document.getElementById("add_numerator2").innerHTML = add_c1;
document.getElementById("add_denominator2").innerHTML = add_d1;

// centre the drawing
var x1, y1;
var denominator1;
var segmentWidth1;
var pieAngle1;
// begin at 0 and end at one segment width
var startAngle1 = 0;
var endAngle1 = segmentWidth1;
// how thick you want add_a1 segment
var segmentDepth1 = 30;

function demo_init1(){
  	showFraction1_1(segmentDepth1);
  	showFillText1();
	showFraction1_2(segmentDepth1);
	draw_sum1();
}

function showFraction1_1(){
	numerator1 = add_a1;
	denominator1 = add_b1;
	
	x1 = 70;
	y1 = canvas1.height / 4;
	segmentWidth1 = 360 / denominator1;
	pieAngle1 = 2 * Math.PI / denominator1;
	//draw fracion on canvas1
 	drawFraction1_1(segmentDepth1);

	if(segmentDepth1<50){
		 segmentDepth1 +=1;
		var timer1 = setTimeout(showFraction1_1,800);
	//var timer = setTimeout(showFraction1_1,600);
	} 
    //if the two denominator1 are not the same find out common factor
    if(add_b1!=add_d1){
	   	segmentDepth1 +=1;
		setInterval(function() {              
    	calculatefraction1_1(segmentDepth1);
    		}, 3000);
    }
}



function showFraction1_2(){
	numerator1 = add_c1;
	denominator1 = add_d1;
	x1 = 200;
	y1 = canvas1.height / 4;
	
	segmentWidth1 = 360 / denominator1;
	pieAngle1 = 2 * Math.PI / denominator1;
	//draw fraction on canvas1
    drawFraction1_1(segmentDepth1);

    if(segmentDepth1<50){
		 segmentDepth1 +=1;
		var timer = setTimeout(showFraction1_2,800);
	
	} 
	if(add_b1!=add_d1){
		segmentDepth1 +=1;
		setInterval(function() {              
    	calculatefraction1_2(segmentDepth1);
    		}, 3000);
    }
}
// Finds the highest common factor of 2 numbers
function highestCommonFactor1(a, b) {
    if (b === 0) {
        return a;
    }
    return highestCommonFactor1(b, a%b);
}

function leastCommonMultiple1(a, b) {
    return a*b/(highestCommonFactor1(a,b));
}

//find out the common multiple factor
var commonMultiple1 = leastCommonMultiple1(add_b1, add_d1);

function calculatefraction1_1(radius){

	angle1 = 2 * Math.PI /commonMultiple1;

	x1 = 330;
 	y1 = canvas1.height / 4;

	for(var i=0; i < commonMultiple1; i++){
		context1.fillStyle = '#f00';
		context1.fillText('=', 250, 120);
		context1.beginPath();
		context1.moveTo(x1, y1);
		context1.arc(x1, y1, radius, i*angle1, (i +1)*angle1, false);
		context1.lineWidth = segmentDepth1;

		if(i<add_a1*(commonMultiple1/add_b1)){
			context1.fillStyle = '#9172EC';
		}else{
			context1.fillStyle = 'white';
		}

		context1.fill();
	    context1.lineWidth = 2;
	    context1.strokeStyle = '#444';
	    context1.stroke();
	}
}

function calculatefraction1_2(radius){

	angle1 = 2 * Math.PI /commonMultiple1;
	x1 = 460;
	y1 = canvas1.height / 4;

	for(var i=0; i < commonMultiple1; i++){
		context1.fillStyle = '#f00';
		context1.fillText('+', 385, 120);
		context1.beginPath();
		context1.moveTo(x1, y1);
		context1.arc(x1, y1, radius, i*angle1, (i +1)*angle1, false);
		context1.lineWidth = segmentDepth1;
		if(i<add_c1*(commonMultiple1/add_d1)){
			context1.fillStyle = '#9172EC';
		}else{
			context1.fillStyle = '#fff';
		}
		context1.fill();
	    context1.lineWidth = 2;
	    context1.strokeStyle = '#444';
	    context1.stroke();
	}
}

function drawFraction1_1(radius) {
	
    for(var i = 0; i < denominator1; i++){
	    context1.beginPath();
	    context1.moveTo(x1,y1);
	    context1.arc(x1, y1, radius, i*pieAngle1, (i +1)*pieAngle1, false);
	  	context1.lineWidth = segmentDepth1;
	  
	    if(i<numerator1){
	  	context1.fillStyle = '#E0B0FF';
	        
	    }else{
	    	context1.fillStyle = "#fff";
	    }
	    context1.fill();
	    context1.lineWidth = 2;
	    context1.strokeStyle = '#444';
	    context1.stroke();
    }
}
function draw_sum1(){
	ra = 50;
	setInterval(function() {              
    	calculate1(ra);
    }, 6000);
}

var resNumerator1=add_c1*(commonMultiple1/add_d1) + add_a1*(commonMultiple1/add_b1);
var resDenominator1=commonMultiple1;
var number1=Math.floor(resNumerator1/resDenominator1);
var newresNumerator1=resNumerator1-number1*resDenominator1;
var option1 = resNumerator1 + 1;
var optionum2 = resNumerator1 + 2;
var optionum4 = resDenominator1 + 2;
var optionden2 = resDenominator1 + 1;

document.getElementById("q1-op1").innerHTML = option1+"/"+resDenominator1;
document.getElementById("q1-op2").innerHTML = resNumerator1+"/"+resDenominator1;
document.getElementById("q1-op3").innerHTML = optionum2+"/"+optionum4;
document.getElementById("q1-op4").innerHTML = resNumerator1+"/"+optionum4;

//calculate1 the sum of the two fractions
function calculate1(radius){
	var angle1 = 2 * Math.PI /commonMultiple1;
	x1 = canvas1.width/3;
	y1 = canvas1.height*2/3;
	var j= 0;
	var i= 0;
	if(j<number1){
		context1.fillStyle = '#f00';
		context1.fillText('=', 100,280);
		for(i=0; i < commonMultiple1; i++){

			context1.beginPath();
			context1.moveTo(x1+150*j, y1);
			context1.arc(x1+150*j, y1, radius, i*angle1, (i +1)*angle1, false);
			
			context1.lineWidth = segmentDepth1;
			context1.fillStyle = '#C45AEC';
			context1.fill();
		    context1.lineWidth = 2;
		    context1.strokeStyle = '#444';
		    context1.stroke();
		}
	}
	if (newresNumerator1!==0){

		context1.fillStyle = '#f00';
		context1.fillText('=', 100,280);
		for(i=0; i < commonMultiple1; i++){

			context1.beginPath();
			context1.moveTo(x1 +150+150*j,y1);
			context1.arc(x1 +150+ 150*j, y1, radius, i*angle1, (i +1)*angle1, false);
			
			context1.lineWidth = segmentDepth1;
			if(i<newresNumerator1){
				context1.fillStyle = '#C45AEC';
			}else{
				context1.fillStyle = '#fff';
			}
			context1.fill();
		    context1.lineWidth = 2;
		    context1.strokeStyle = '#444';
		    context1.stroke();
		}
	}

}

 function showFillText1() {
 	context1.fillStyle = '#f00';
  	context1.font = 'italic bold 30px sans-serif';
  	context1.textBaseline = 'bottom';
  	context1.fillText('+', 125, 120);
  
  }
