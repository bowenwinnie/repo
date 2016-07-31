

function domloaded_add_second(){
    add_init2();
}

var canvas2 = document.getElementById('canvas2');
var context2 = canvas2.getContext('2d');
	context2.fillStyle = "#FFF";
	context2.fillRect(0, 0, 600, 400);


//var arr2 = [2,3,4,5,10];
//show fractions in the table
var b2_add = den[Math.floor(Math.random()*den.length)];
var add_a2=Math.floor(Math.random()*(b2_add-1))+1;
var add_d2 = den[Math.floor(Math.random()*den.length)];
var add_c2=Math.floor(Math.random()*(add_d2-1))+1;
document.getElementById("add_numerator3").innerHTML = add_a2;
document.getElementById("add_denominator3").innerHTML = b2_add;
document.getElementById("add_numerator4").innerHTML = add_c2;
document.getElementById("add_denominator4").innerHTML = add_d2;

// centre the drawing
var x2, y2;
var denominator2;
var segmentWidth2;
var pieAngle2;
// begin at 0 and end at one segment width
var startAngle2 = 0;
var endAngle2 = segmentWidth2;
// how thick you want add_a2 segment
var segmentDepth2 = 30;

function add_init2(){
  	showFraction2_1(segmentDepth2);
  	showFillText2_2();
	showFraction2_2(segmentDepth2);
	draw_sum2();
}

function showFraction2_1(){
	numerator2 = add_a2;
	denominator2 = b2_add;
	
	x2 = 70;
	y2 = canvas2.height / 4;
	segmentWidth2 = 360 / denominator2;
	pieAngle2 = 2 * Math.PI / denominator2;
	//draw fracion on canvas2
 	drawFraction2_2(segmentDepth2);

	if(segmentDepth2<50){
		 segmentDepth2 +=1;
		var timer = setTimeout(showFraction2_1,800);
	//var timer = setTimeout(showFraction2_1,600);
	} 
    //if the two denominator2 are not the same find out common factor
    if(b2_add!=add_d2){
	   	segmentDepth2 +=1;
		setInterval(function() {              
    	calculatefraction2_1(segmentDepth2);
    		}, 3000);
    }
}



function showFraction2_2(){
	numerator2 = add_c2;
	denominator2 = add_d2;
	x2 = 200;
	y2 = canvas2.height / 4;
	
	segmentWidth2 = 360 / denominator2;
	pieAngle2 = 2 * Math.PI / denominator2;
	//draw fraction on canvas2
    drawFraction2_2(segmentDepth2);

    if(segmentDepth2<50){
		 segmentDepth2 +=1;
		var timer = setTimeout(showFraction2_2,800);
	
	} 
	if(b2_add!=add_d2){
		segmentDepth2 +=1;
		setInterval(function() {              
    	calculatefraction2_2(segmentDepth2);
    		}, 3000);
    }
}
// Finds the highest common factor of 2 numbers
function highestCommonFactor2(a, b) {
    if (b === 0) {
        return a;
    }
    return highestCommonFactor2(b, a%b);
}

function leastCommonMultiple2(a, b) {
    return a*b/(highestCommonFactor2(a,b));
}

//find out the common multiple factor
var commonMultiple2 = leastCommonMultiple2(b2_add, add_d2);

function calculatefraction2_1(radius){

	angle2 = 2 * Math.PI /commonMultiple2;

	x2 = 330;
 	y2 = canvas2.height / 4;

	for(var i=0; i < commonMultiple2; i++){
		context2.fillStyle = '#f00';
		context2.fillText('=', 250, 120);
		context2.beginPath();
		context2.moveTo(x2, y2);
		context2.arc(x2, y2, radius, i*angle2, (i +1)*angle2, false);
		context2.lineWidth = segmentDepth2;

		if(i<add_a2*(commonMultiple2/b2_add)){
			context2.fillStyle = '#9172EC';
		}else{
			context2.fillStyle = 'white';
		}

		context2.fill();
	    context2.lineWidth = 2;
	    context2.strokeStyle = '#444';
	    context2.stroke();
	}
}

function calculatefraction2_2(radius){

	var angle2 = 2 * Math.PI /commonMultiple2;
	x2 = 460;
	y2 = canvas2.height / 4;

	for(var i=0; i < commonMultiple2; i++){
		context2.fillStyle = '#f00';
		context2.fillText('+', 385, 120);
		context2.beginPath();
		context2.moveTo(x2, y2);
		context2.arc(x2, y2, radius, i*angle2, (i +1)*angle2, false);
		context2.lineWidth = segmentDepth2;
		if(i<add_c2*(commonMultiple2/add_d2)){
			context2.fillStyle = '#9172EC';
		}else{
			context2.fillStyle = '#fff';
		}
		context2.fill();
	    context2.lineWidth = 2;
	    context2.strokeStyle = '#444';
	    context2.stroke();
	}
}

function drawFraction2_2(radius) {
	
    for(var i = 0; i < denominator2; i++){
	    context2.beginPath();
	    context2.moveTo(x2,y2);
	    context2.arc(x2, y2, radius, i*pieAngle2, (i +1)*pieAngle2, false);
	  	context2.lineWidth = segmentDepth2;
	  
	    if(i<numerator2){
	  	context2.fillStyle = '#E0B0FF';
	        
	    }else{
	    	context2.fillStyle = "#fff";
	    }
	    context2.fill();
	    context2.lineWidth = 2;
	    context2.strokeStyle = '#444';
	    context2.stroke();
    }
}
function draw_sum2(){
	ra = 50;
	setInterval(function() {              
    	calculate2(ra);
    }, 6000);
}

var resNumerator2=add_c2*(commonMultiple2/add_d2) + add_a2*(commonMultiple2/b2_add);
var resDenominator2=commonMultiple2;
var number2=Math.floor(resNumerator2/resDenominator2);
var newresNumerator2=resNumerator2-number2*resDenominator2;
var option1 = resNumerator2 + 1;
var optionum2 = resNumerator2 + 2;
var optionum4 = resDenominator2 + 2;
var optionden2 = resDenominator2 + 1;

document.getElementById("q2-op1").innerHTML = option1+"/"+resDenominator2;
document.getElementById("q2-op2").innerHTML = optionum2+"/"+optionum4;
document.getElementById("q2-op3").innerHTML = resNumerator2+"/"+resDenominator2;
document.getElementById("q2-op4").innerHTML = resNumerator2+"/"+optionum4;

//calculate2 the sum of the two fractions
function calculate2(radius){
	var angle2 = 2 * Math.PI /commonMultiple2;
	x2 = canvas2.width/3;
	y2 = canvas2.height*2/3;
	var j= 0;
	var i= 0;
	if(j<number2){
		context2.fillStyle = '#f00';
		context2.fillText('=', 100,280);
		for(i=0; i < commonMultiple2; i++){

			context2.beginPath();
			context2.moveTo(x2+150*j, y2);
			context2.arc(x2+150*j, y2, radius, i*angle2, (i +1)*angle2, false);
			
			context2.lineWidth = segmentDepth2;
			context2.fillStyle = '#C45AEC';
			context2.fill();
		    context2.lineWidth = 2;
		    context2.strokeStyle = '#444';
		    context2.stroke();
		}
	}
	if (newresNumerator2!==0){

		context2.fillStyle = '#f00';
		context2.fillText('=', 100,280);
		for(i=0; i < commonMultiple2; i++){

			context2.beginPath();
			context2.moveTo(x2 +150+150*j,y2);
			context2.arc(x2 +150+ 150*j, y2, radius, i*angle2, (i +1)*angle2, false);
			
			context2.lineWidth = segmentDepth2;
			if(i<newresNumerator2){
				context2.fillStyle = '#C45AEC';
			}else{
				context2.fillStyle = '#fff';
			}
			context2.fill();
		    context2.lineWidth = 2;
		    context2.strokeStyle = '#444';
		    context2.stroke();
		}
	}

}

 function showFillText2_2() {
 	context2.fillStyle = '#f00';
  	context2.font = 'italic bold 30px sans-serif';
  	context2.textBaseline = 'bottom';
  	context2.fillText('+', 125, 120);
  
  }