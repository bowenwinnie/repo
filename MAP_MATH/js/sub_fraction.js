

function domloaded_sub(){
    demo_init3();
}
var canvas3 = document.getElementById('canvas3');
var context3 = canvas3.getContext('2d');
	context3.fillStyle = "#FFF";
	context3.fillRect(0, 0, 600, 400);
 

//var arr3 = [2,3,4,5,10];

//get random fraction
var b3 = den[Math.floor(Math.random()*den.length)];
var a3=Math.floor(Math.random()*(b3-1))+1;
var d3 = den[Math.floor(Math.random()*den.length)];
var c3=Math.floor(Math.random()*(d3-1))+1;
// Finds the highest common factor of 2 numbers
function highestCommonFactor3(a, b) {
    if (b === 0) {
        return a;
    }
    return highestCommonFactor3(b, a%b);
}

function leastCommonMultiple3(a, b) {
    return a*b/(highestCommonFactor3(a,b));
}

//find out the common multiple factor
var commonMultiple3 = leastCommonMultiple3(b3, d3);

showtable3();
//show fractions in the table
function showtable3(){
	arg1=a3*(commonMultiple3/b3);
	arg2=c3*(commonMultiple3/d3);
	if (arg1>=arg2){
		document.getElementById("sub_numerator1").innerHTML = a3;
		document.getElementById("sub_denominator1").innerHTML = b3;
		document.getElementById("sub_numerator2").innerHTML = c3;
		document.getElementById("sub_denominator2").innerHTML = d3;
	}else{
		document.getElementById("sub_numerator1").innerHTML = c3;
		document.getElementById("sub_denominator1").innerHTML = d3;
		document.getElementById("sub_numerator2").innerHTML = a3;
		document.getElementById("sub_denominator2").innerHTML = b3;
	}
}
//compare3 two fractions
function compare3(arg1, arg2){
		
		// showtable3();
	arg1=a3*(commonMultiple3/b3);
	arg2=c3*(commonMultiple3/d3);
	if (arg1<arg2){
	
		temp3 = c3;
		c3 = a3;
		a3 = temp3;
		temp3 = b3;
		b3 = d3;
		d3 = temp3;
		// showtable3();
	}
}
	

// centre the drawing
var x3, y3;
var denominator3;
var segmentWidth3;
var pieAngle3;
// begin at 0 and end at one segment width
var startAngle = 0;
var endAngle = segmentWidth3;
// how thick you want a3 segment
var segmentDepth3 = 30;

function demo_init3(){

	compare3((a3*(commonMultiple3/b3)),(c3*(commonMultiple3/d3)));
  	showFraction3_1(segmentDepth3);
  	showFillText3();
	showFraction3_2(segmentDepth3);
	draw_sub3();
}

function showFraction3_1(){

	numerator3 = a3;
	denominator3 = b3;
	
	x3 = 70;
	y3 = canvas3.height / 4;
	segmentWidth3 = 360 / denominator3;
	pieAngle3 = 2 * Math.PI / denominator3;
	//draw fracion on canvas3
 	drawFraction3(segmentDepth3);

	if(segmentDepth3<50){
		 segmentDepth3 +=1;
		var timer = setTimeout(showFraction3_1,800);
	} 
    //if the two denominator3 are not the same find out common factor
    if(b3!=d3){
	   	segmentDepth3 +=1;
		setInterval(function() {              
    	calculatefraction3_1(segmentDepth3);
    	}, 3000);
    }
}

function showFraction3_2(){
	numerator3 = c3;
	denominator3 = d3;
	x3 = 200;
	y3 = canvas3.height / 4;
	
	segmentWidth3 = 360 / denominator3;
	pieAngle3 = 2 * Math.PI / denominator3;
	//draw fraction on canvas3
    drawFraction3(segmentDepth3);

    if(segmentDepth3<50){
		 segmentDepth3 +=1;
		var timer = setTimeout(showFraction3_2,800);
	} 
	if(b3!=d3){
		segmentDepth3 +=1;
		setInterval(function() {              
    	calculatefraction3_2(segmentDepth3);
    		}, 3000);
    }
}


function calculatefraction3_1(radius){

	angle3 = 2 * Math.PI /commonMultiple3;
	x3 = 340;
	y3 = canvas3.height / 4;

	for(var i=0; i < commonMultiple3; i++){
		context3.fillStyle = '#f00';
		context3.fillText('=', 260, 120);
		context3.beginPath();
		context3.moveTo(x3, y3);
		context3.arc(x3, y3, radius, i*angle3, (i +1)*angle3, false);
		context3.lineWidth = segmentDepth3;

		if(i<a3*(commonMultiple3/b3)){
			context3.fillStyle = '#9172EC';
		}else{
			context3.fillStyle = '#fff';
		}

		context3.fill();
	    context3.lineWidth = 2;
	    context3.strokeStyle = '#444';
	    context3.stroke();
	}
}


function calculatefraction3_2(radius){

	angle3 = 2 * Math.PI /commonMultiple3;
	x3 = 480;
	y3 = canvas3.height / 4;

	for(var i=0; i < commonMultiple3; i++){
		context3.fillStyle = '#f00';
		context3.fillText('-', 400, 120);
		context3.beginPath();
		context3.moveTo(x3, y3);
		context3.arc(x3, y3, radius, i*angle3, (i +1)*angle3, false);
		context3.lineWidth = segmentDepth3;

		if(i<c3*(commonMultiple3/d3)){
			context3.fillStyle = '#9172EC';
		}else{
			context3.fillStyle = '#fff';
		}
		context3.fill();
	    context3.lineWidth = 2;
	    context3.strokeStyle = '#444';
	    context3.stroke();
	}
}

function drawFraction3(radius) {

	
	
    for(var i = 0; i < denominator3; i++){
	    context3.beginPath();
	    context3.moveTo(x3,y3);
	    context3.arc(x3, y3, radius, i*pieAngle3, (i +1)*pieAngle3, false);
	  	context3.lineWidth = segmentDepth3;
	  
	    if(i<numerator3){
	  	context3.fillStyle = '#E0B0FF';
	        
	    }else{
	    	context3.fillStyle = "#fff";
	    }
	    context3.fill();
	    context3.lineWidth = 2;
	    context3.strokeStyle = '#444';
	    context3.stroke();
    }
}
function draw_sub3(){
	ra = 50;
	setInterval(function() {              
    	calculate3(ra);
    }, 4000);
}

var resNumerator3=Math.abs(c3*(commonMultiple3/d3) - a3*(commonMultiple3/b3));
var resDenominator3=commonMultiple3;
var number3=Math.floor(resNumerator3/resDenominator3);
var newresNumerator3=resNumerator3-number3*resDenominator3;

var option1 = resNumerator3 + 1;
var optionum2 = resNumerator3 + 2;
var optionum4 = resDenominator3 + 2;
var optionden2 = resDenominator3 + 1;

document.getElementById("q3-op1").innerHTML = option1+"/"+resDenominator3;
document.getElementById("q3-op3").innerHTML = optionum2+"/"+optionum4;
document.getElementById("q3-op2").innerHTML = resNumerator3+"/"+resDenominator3;
document.getElementById("q3-op4").innerHTML = resNumerator3+"/"+optionum4;

//calculate3 the sum of the two fractions
function calculate3(radius){
	angle3 = 2 * Math.PI /commonMultiple3;
	x3 = canvas3.width / 3;
	y3 = canvas3.height *2/3;
	var j= 0;
	var i= 0;
	if(j<number3){
		context3.fillStyle = '#f00';
		context3.fillText('=', 100,280);
		for(i=0; i < commonMultiple3; i++){

			context3.beginPath();
			context3.moveTo(x3+150*j, y3);
			context3.arc(x3+150*j, y3, radius, i*angle3, (i +1)*angle3, false);
			
			context3.lineWidth = segmentDepth3;
			context3.fillStyle = '#C45AEC';
			context3.fill();
		    context3.lineWidth = 2;
		    context3.strokeStyle = '#444';
		    context3.stroke();
		}
	}
	if (newresNumerator3!==0){
		context3.fillStyle = '#f00';
		context3.fillText('=', 100,280);

		for(i=0; i < commonMultiple3; i++){

			context3.beginPath();
			context3.moveTo(x3 +150+150*j, y3);
			context3.arc(x3 +150+150*j, y3, radius, i*angle3, (i +1)*angle3, false);
			
			context3.lineWidth = segmentDepth3;
			if(i<newresNumerator3){
				context3.fillStyle = '#C45AEC';
			}else{
				context3.fillStyle = '#fff';
			}
			context3.fill();
		    context3.lineWidth = 2;
		    context3.strokeStyle = '#444';
		    context3.stroke();
		}
	}else {
			context3.beginPath();
			context3.arc(x3 +100+100*j, y3, radius, 0, 2*Math.PI, false);
			context3.lineWidth = segmentDepth3;
			context3.fillStyle = '#E3E4FA';
			context3.fill();
		    context3.lineWidth = 2;
		    context3.strokeStyle = '#444';
		    context3.stroke();
	}

}

 function showFillText3() {
 	context3.fillStyle = '#f00';
  	context3.font = 'italic bold 30px sans-serif';
  	context3.textBaseline = 'bottom';
  	context3.fillText('-', 125, 120);
  
  }














