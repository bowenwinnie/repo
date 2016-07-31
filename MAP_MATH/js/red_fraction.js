document.addEventListener('DOMContentLoaded',domloaded_reduce,false);
function domloaded_reduce(){
    demo_red_inti();
}

var canvas5  = new fabric.Canvas('canvas5', { backgroundColor: "#FFF" });

//var arr = [2,3,4,5,10];

//get random fraction

var denominator5= den[Math.floor(Math.random()*den.length)];
var numerator5 = 2*denominator5+1;

//show fractions in the table
//document.getElementById("red_numerator1").innerHTML = numerator5;
//document.getElementById("red_denominator1").innerHTML = denominator5;
var optionnum3 = numerator5 + 1;
var optionden3 = denominator5 + 1;
var optionnum2 = numerator5 + 2;
var optionden2 = denominator5 + 1;
var optionnum1 = numerator5 + 1;
var optionden1 = denominator5 + 2;

document.getElementById("q5-op4").innerHTML = numerator5+"/"+denominator5;
document.getElementById("q5-op3").innerHTML = optionnum3+"/"+optionden3;
document.getElementById("q5-op2").innerHTML = optionnum2+"/"+optionden2;
document.getElementById("q5-op1").innerHTML = optionnum1+"/"+optionden1;

//var resDenominator=commonMultiple;
//var number=Math.floor(resNumerator/resDenominator);
//var newresNumerator=resNumerator-number*resDenominator;


function reduce(a,b){
	var n = Math.floor(a/b);
	var newNumerator = a - n*b;

	document.getElementById("red_number").innerHTML = n;
 	document.getElementById("red_numerator2").innerHTML = newNumerator;
  	document.getElementById("red_denominator2").innerHTML = b;

}

function red_show(){
	var num = ""+numerator5+"";
	var deno = ""+denominator5+"";

	var number1 = new fabric.Text(num, {
	    fontFamily: 'Courier New',
	    left:0,
	    top: 0,
	    originX:"center",
	    originY:"center",
	    fill: '#F660AB'
		});
	var line1 = new fabric.Line([0, 0, 50, 0], { 
		left:0,
		top: 20,
		fill:'black', 
		stroke: 'black',
		strokeWidth:2,
		originX: 'center',
		originY: 'center',

		});
	
	var number2 = new fabric.Text(deno, {
	    fontFamily: 'Courier New',
	    left: 0,
	    top: 50,
	    originX:"center",
	    originY:"center",
	    fill: '#F660AB'
		});

	var operation1 = new fabric.Text("=",{
		left: 180,
		top: 150,
		originX:"center",
	    originY:"center",

	});

	var questionGroup=new fabric.Group([number1,line1,number2],{
		left:0,
		top:100,
			});

	var number3 = new fabric.Text("(2×"+deno+")+1",{
	    fontFamily: 'Courier New',
	    left:30,
	    top: 0,
	    originX:"center",
	    originY:"center",
	    fill: '#F433FF'
		});

	var line2 = new fabric.Line([0, 0, 160, 0], { 
		left:30,
		top: 20,
		fill:'black', 
		stroke: 'black',
		strokeWidth:2,
		originX: 'center',
		originY: 'center',

		});
	
	var number4 = new fabric.Text(deno, {
	    fontFamily: 'Courier New',
	    left: 30,
	    top: 50,
	    originX:"center",
	    originY:"center",
	    fill: '#F660AB'
		});

	var processGroup=new fabric.Group([number3, line2, number4],{
		left:200,
		top:0,
			});

	var operation2 = new fabric.Text("=",{
		left: 400,
		top: 150,
		originX:"center",
	    originY:"center",
		});
	
	var number5 = new fabric.Text("2",{
	    fontFamily: 'Courier New',
	    left:100,
	    top: 20,
	    originX:"center",
	    originY:"center",
	    fill: '#F660AB'
		});

	var number6 = new fabric.Text("1",{
	    fontFamily: 'Courier New',
	    left:140,
	    top: 0,
	    originX:"center",
	    originY:"center",
	    fill: '#F660AB'
		});

	var line3 = new fabric.Line([0, 0, 50, 0], { 
		left:140,
		top: 20,
		fill:'black', 
		stroke: 'black',
		strokeWidth:2,
		originX: 'center',
		originY: 'center',

		});
	
	var number7 = new fabric.Text(deno, {
	    fontFamily: 'Courier New',
	    left: 140,
	    top: 50,
	    originX:"center",
	    originY:"center",
	    fill: '#F660AB'
		});

	var resultGroup1=new fabric.Group([number5, number6, line3, number7],{
		left:430,
		top:400,
			});

	canvas5.forEachObject(function(object){
		object.set('fontSize',10);
		object.selectable = false; 
			});	

	canvas5.clear().renderAll();
	questionGroup.animate('left', '+=100', { onChange: canvas5.renderAll.bind(canvas5) });
	processGroup.animate('top', '+=100', { onChange: canvas5.renderAll.bind(canvas5) });
	resultGroup1.animate('top', '-=300', { onChange: canvas5.renderAll.bind(canvas5) });


	canvas5.add(questionGroup);
	canvas5.add(operation1);
	canvas5.add(processGroup);
	canvas5.add(operation2);
	canvas5.add(resultGroup1);

}

function demo_red_inti(){
	reduce(numerator5,denominator5);
	red_show();

}
	












