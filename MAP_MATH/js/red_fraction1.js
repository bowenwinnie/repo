document.addEventListener('DOMContentLoaded',domloaded_reduce1,false);

function domloaded_reduce1(){
    demo_red_inti1();
}

var canvas_red  = new fabric.Canvas('canvas6', { backgroundColor: "#FFF" }); 

//var arr = [2,3,4,5,10];

//get random fraction

var denominator6= den[Math.floor(Math.random()*den.length)];
var numerator6 = 2*denominator6+1;

//show fractions in the table
document.getElementById("red_numerator3").innerHTML = numerator6;
document.getElementById("red_denominator3").innerHTML = denominator6;

//var resDenominator=commonMultiple;
//var number=Math.floor(resNumerator/resDenominator);
//var newresNumerator=resNumerator-number*resDenominator;


function reduce1(a,b){
	var n = Math.floor(a/b);
	var newNumerator = a - n*b;

	//document.getElementById("red_number").innerHTML = n;
 	//document.getElementById("red_numerator2").innerHTML = newNumerator;
  	//document.getElementById("red_denominator2").innerHTML = b;
	var optionnum4 = newNumerator + 1;
var optionden4 = b + 1;
var optionred4 = n+3;
var optionnum2 = newNumerator + 2;
var optionden2 = b + 1;
var optionred2 = n+2;
var optionnum1 = newNumerator + 1;
var optionden1 = b + 2;
var optionred1 = n+1;

document.getElementById("q6-op4").innerHTML = optionred4+"("+optionnum4+"/"+optionden4+")";
document.getElementById("q6-op3").innerHTML = n+"("+newNumerator+"/"+b+")";
document.getElementById("q6-op2").innerHTML = optionred2+"("+optionnum2+"/"+optionden2+")";
document.getElementById("q6-op1").innerHTML = optionred1+"("+optionnum1+"/"+optionden1+")";

}



function red_show1(){
	var red_num = ""+numerator6+"";
	var red_deno = ""+denominator6+"";

	var number1 = new fabric.Text(red_num, {
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
	
	var number2 = new fabric.Text(red_deno, {
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

	var number3 = new fabric.Text("(2×"+red_deno+")+1",{
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
	
	var number4 = new fabric.Text(red_deno, {
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
	
	var number7 = new fabric.Text(red_deno, {
	    fontFamily: 'Courier New',
	    left: 140,
	    top: 50,
	    originX:"center",
	    originY:"center",
	    fill: '#F660AB'
		});

	var resultGroup2=new fabric.Group([number5, number6, line3, number7],{
		left:430,
		top:400,
			});

	canvas_red.forEachObject(function(object){ 
		object.set('fontSize',10);
		object.selectable = false; 
			});	

	canvas_red.clear().renderAll();
	questionGroup.animate('left', '+=100', { onChange: canvas_red.renderAll.bind(canvas_red) });
	processGroup.animate('top', '+=100', { onChange: canvas_red.renderAll.bind(canvas_red) });
	resultGroup2.animate('top', '-=300', { onChange: canvas_red.renderAll.bind(canvas_red) });


	canvas_red.add(questionGroup);
	canvas_red.add(operation1);
	canvas_red.add(processGroup);
	canvas_red.add(operation2);
	canvas_red.add(resultGroup2);

}

function demo_red_inti1(){
	reduce1(numerator6,denominator6);
	red_show1();

}