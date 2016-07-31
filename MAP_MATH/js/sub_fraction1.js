

function domloaded_sub1(){
    demo_sub_init2();
}
var canvas4 = document.getElementById('canvas4');
var context4 = canvas4.getContext('2d');
	context4.fillStyle = "#FFF";
	context4.fillRect(0, 0, 600, 400);
 

//var arr4 = [2,3,4,5,10];

//get random fraction
var b4 = den[Math.floor(Math.random()*den.length)];
var a4=Math.floor(Math.random()*(b4-1))+1;
var d4 = den[Math.floor(Math.random()*den.length)];
var c4=Math.floor(Math.random()*(d4-1))+1;

// Finds the highest common factor of 2 numbers
function highestCommonFactor4(a, b) {
    if (b === 0) {
        return a;
    }
    return highestCommonFactor4(b, a%b);
}

function leastCommonMultiple4(a, b) {
    return a*b/(highestCommonFactor4(a,b));
}

//find out the common multiple factor
var commonMultiple4 = leastCommonMultiple4(b4, d4);

showtable4();
//show fractions in the table
function showtable4(){

	arg1=a4*(commonMultiple4/b4);
	arg2=c4*(commonMultiple4/d4);
	if (arg1>=arg2){
		document.getElementById("sub_numerator3").innerHTML = a4;
		document.getElementById("sub_denominator3").innerHTML = b4;
		document.getElementById("sub_numerator4").innerHTML = c4;
		document.getElementById("sub_denominator4").innerHTML = d4;
	}else{
		document.getElementById("sub_numerator3").innerHTML = c4;
		document.getElementById("sub_denominator3").innerHTML = d4;
		document.getElementById("sub_numerator4").innerHTML = a4;
		document.getElementById("sub_denominator4").innerHTML = b4;
	}
}
//compare4 two fractions
function compare4(arg1, arg2){
		arg1=a4*(commonMultiple4/b4);
		arg2=c4*(commonMultiple4/d4);
	if (arg1<arg2){
	
		temp4 = c4;
		c4 = a4;
		a4 = temp4;
		temp4 = b4;
		b4 = d4;
		d4 = temp4;
	}
}
	

// centre the drawing
var x4, y4;
var denominator4;
var segmentWidth4;
var pieAngle4;
// begin at 0 and end at one segment width
var startAngle = 0;
var endAngle = segmentWidth4;
// how thick you want a4 segment
var segmentDepth4 = 30;

function demo_sub_init2(){

	compare4((a4*(commonMultiple4/b4)),(c4*(commonMultiple4/d4)));
  	showFraction4_1(segmentDepth4);
  	showFillText4();
	showFraction4_2(segmentDepth4);
	draw_sub4();
}

function showFraction4_1(){
	numerator4 = a4;
	denominator4 = b4;
	
	x4 = 70;
	y4 = canvas4.height / 4;
	segmentWidth4 = 360 / denominator4;
	pieAngle4 = 2 * Math.PI / denominator4;
	//draw fracion on canvas4
 	drawFraction4(segmentDepth4);

	if(segmentDepth4<50){
		 segmentDepth4 +=1;
		var timer = setTimeout(showFraction4_1,800);
	} 
    //if the two denominator4 are not the same find out common factor
    if(b4!=d4){
	   	segmentDepth4 +=1;
		setInterval(function() {              
    	calculatefraction4_1(segmentDepth4);
    	}, 3000);
    }
}

function showFraction4_2(){
	numerator4 = c4;
	denominator4 = d4;
	x4 = 200;
	y4 = canvas4.height / 4;
	
	segmentWidth4 = 360 / denominator4;
	pieAngle4 = 2 * Math.PI / denominator4;
	//draw fraction on canvas4
    drawFraction4(segmentDepth4);

    if(segmentDepth4<50){
		 segmentDepth4 +=1;
		var timer = setTimeout(showFraction4_2,800);
	} 
	if(b4!=d4){
		segmentDepth4 +=1;
		setInterval(function() {              
    	calculatefraction4_2(segmentDepth4);
    		}, 3000);
    }
}


function calculatefraction4_1(radius){

	var angle4 = 2 * Math.PI /commonMultiple4;
	x4 = 340;
	y4 = canvas4.height / 4;

	for(var i=0; i < commonMultiple4; i++){
		context4.fillStyle = '#f00';
		context4.fillText('=', 260, 120);
		context4.beginPath();
		context4.moveTo(x4, y4);
		context4.arc(x4, y4, radius, i*angle4, (i +1)*angle4, false);
		context4.lineWidth = segmentDepth4;

		if(i<a4*(commonMultiple4/b4)){
			context4.fillStyle = '#9172EC';
		}else{
			context4.fillStyle = '#fff';
		}

		context4.fill();
	    context4.lineWidth = 2;
	    context4.strokeStyle = '#444';
	    context4.stroke();
	}
}


function calculatefraction4_2(radius){

	angle4 = 2 * Math.PI /commonMultiple4;
	x4 = 480;
	y4 = canvas4.height / 4;

	for(var i=0; i < commonMultiple4; i++){
		context4.fillStyle = '#f00';
		context4.fillText('-', 400, 120);
		context4.beginPath();
		context4.moveTo(x4, y4);
		context4.arc(x4, y4, radius, i*angle4, (i +1)*angle4, false);
		context4.lineWidth = segmentDepth4;

		if(i<c4*(commonMultiple4/d4)){
			context4.fillStyle = '#9172EC';
		}else{
			context4.fillStyle = '#fff';
		}
		context4.fill();
	    context4.lineWidth = 2;
	    context4.strokeStyle = '#444';
	    context4.stroke();
	}
}

function drawFraction4(radius) {
	
    for(var i = 0; i < denominator4; i++){
	    context4.beginPath();
	    context4.moveTo(x4,y4);
	    context4.arc(x4, y4, radius, i*pieAngle4, (i +1)*pieAngle4, false);
	  	context4.lineWidth = segmentDepth4;
	  
	    if(i<numerator4){
	  	context4.fillStyle = '#E0B0FF';
	        
	    }else{
	    	context4.fillStyle = "#fff";
	    }
	    context4.fill();
	    context4.lineWidth = 2;
	    context4.strokeStyle = '#444';
	    context4.stroke();
    }
}
function draw_sub4(){
	ra = 50;
	setInterval(function() {              
    	calculate4(ra);
    }, 4000);
}

var resNumerator4=Math.abs(c4*(commonMultiple4/d4) - a4*(commonMultiple4/b4));
var resDenominator4=commonMultiple4;
var number4=Math.floor(resNumerator4/resDenominator4);
var newresNumerator4=resNumerator4-number4*resDenominator4;

var option1 = resNumerator4 + 1;
var optionum2 = resNumerator4 + 2;
var optionum4 = resDenominator4 + 2;
var optionden2 = resDenominator4 + 1;

document.getElementById("q4-op1").innerHTML = resNumerator4+"/"+resDenominator4;
document.getElementById("q4-op2").innerHTML = optionum2+"/"+optionum4;
document.getElementById("q4-op3").innerHTML = option1+"/"+resDenominator4;
document.getElementById("q4-op4").innerHTML = resNumerator4+"/"+optionum4;

//calculate4 the sum of the two fractions
function calculate4(radius){
	angle4 = 2 * Math.PI /commonMultiple4;
	x4 = canvas4.width / 3;
	y4 = canvas4.height *2/3;
	var j= 0;
	var i= 0;
	if(j<number4){
		context4.fillStyle = '#f00';
		context4.fillText('=', 100,280);
		for(i=0; i < commonMultiple4; i++){

			context4.beginPath();
			context4.moveTo(x4+150*j, y4);
			context4.arc(x4+150*j, y4, radius, i*angle4, (i +1)*angle4, false);
			
			context4.lineWidth = segmentDepth4;
			context4.fillStyle = '#C45AEC';
			context4.fill();
		    context4.lineWidth = 2;
		    context4.strokeStyle = '#444';
		    context4.stroke();
		}
	}
	if (newresNumerator4!==0){
		context4.fillStyle = '#f00';
		context4.fillText('=', 100,280);

		for(i=0; i < commonMultiple4; i++){

			context4.beginPath();
			context4.moveTo(x4 +150+150*j, y4);
			context4.arc(x4 +150+150*j, y4, radius, i*angle4, (i +1)*angle4, false);
			
			context4.lineWidth = segmentDepth4;
			if(i<newresNumerator4){
				context4.fillStyle = '#C45AEC';
			}else{
				context4.fillStyle = '#fff';
			}
			context4.fill();
		    context4.lineWidth = 2;
		    context4.strokeStyle = '#444';
		    context4.stroke();
		}
	}else {
			context4.beginPath();
			context4.arc(x4 +100+100*j, y4, radius, 0, 2*Math.PI, false);
			context4.lineWidth = segmentDepth4;
			context4.fillStyle = '#E3E4FA';
			context4.fill();
		    context4.lineWidth = 2;
		    context4.strokeStyle = '#444';
		    context4.stroke();
	}

}

 function showFillText4() {
 	context4.fillStyle = '#f00';
  	context4.font = 'italic bold 30px sans-serif';
  	context4.textBaseline = 'bottom';
  	context4.fillText('-', 125, 120);
  
  }














