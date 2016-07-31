
var a2 = Math.floor((Math.random() * 10) + 1);
var b2 = Math.floor((Math.random() * 10) + 1);
var c2;

$('#pytha-eq2').html("<p style='font-size: 18px;'>"+a2+"<sup>2</sup>&nbsp;+&nbsp;"+b2+"<sup>2</sup>&nbsp;=&nbsp;?</p>");

c2 = Math.floor(Math.sqrt(a2*a2 + b2*b2));
var option2_pytha2 = c2 + 3;
var option3_pytha2 = c2 + 5;
var option4_pytha2 = c2 + 4;
$('#q8-op1').html(c2+"<sup>2</sup>");
$('#q8-op2').html(option2_pytha2+"<sup>2</sup>");
$('#q8-op3').html(option3_pytha2+"<sup>2</sup>");
$('#q8-op4').html(option4_pytha2+"<sup>2</sup>");


// create a wrapper around native canvas element (with id="c")
	var canvas_pytha2 = new fabric.Canvas('canvas8', { backgroundColor:  '#fff' });
    var pyth2_line1 = new fabric.Line([50, 100, 150, 100], {
        left: 0,
        top: 0,
        stroke: 'white'
    });
	var a_char2 = ""+a2+"";
	var b_char2 = ""+b2+"";
	var c_char2 = ""+c2+"";
	canvas_pytha2.add(pyth2_line1);
	var pyth2_path1 = new fabric.Path('M 100 0 L 400 0 L 400 100 z');
	canvas_pytha2.add(pyth2_path1);
	var pyth2_path2 = new fabric.Path('M 400 100 L 400 400 L 300 400 z');
	canvas_pytha2.add(pyth2_path2);
	var pyth2_path3 = new fabric.Path('M 300 400 L 0 400 L 0 300 z');
	canvas_pytha2.add(pyth2_path3);
	var pyth2_path4 = new fabric.Path('M 0 300 L 0 0 L 100 0 z');
	canvas_pytha2.add(pyth2_path4);
	var atext2 = new fabric.Text(a_char2, {  originX: 'center', originY: 'center', fontSize: 40, fontWeight: 'bold' });
	var btext2 = new fabric.Text(b_char2, { originX: 'center', originY: 'center', fontSize: 40, fontWeight: 'bold' });
	var texta22 = new fabric.Text('2', {  left: 15, top: -29, fontSize: 20, fontWeight: 'bold' });
	var textb22 = new fabric.Text('2', {  left: 15, top: -29, fontSize: 20, fontWeight: 'bold' });
	var ctext2 = new fabric.Text(c_char2, {  originX: 'center', originY: 'center', fontSize: 40, fontWeight: 'bold' });
	var textc22 = new fabric.Text('2', {  left: 15, top: -29, fontSize: 20, fontWeight: 'bold' });
	var groupa2 = new fabric.Group([ atext2, texta22 ], { left: 35, top: 25, opacity: 0, fill: '#000' });
	canvas_pytha2.add(groupa2);
	groupa2.animate({opacity: 1 }, {
     
	  duration: 8000,
      onChange: canvas_pytha2.renderAll.bind(canvas_pytha2),
	});
	var groupb2 = new fabric.Group([ btext2, textb22 ], { left: 130, top: 220, opacity: 0, fill: '#000' });
	canvas_pytha2.add(groupb2);
	groupb2.animate({opacity: 1 }, {
      
	  duration: 8000,
      onChange: canvas_pytha2.renderAll.bind(canvas_pytha2),
	});
	var groupc2 = new fabric.Group([ ctext2, textc22 ], { left: 200, top: 170, opacity: 1, fill: '#000' });
	canvas_pytha2.add(groupc2);
	groupc2.animate({opacity: 0 }, {
      
	  duration: 8000,
      onChange: canvas_pytha2.renderAll.bind(canvas_pytha2),
	});
	pyth2_path1.set({ fill: 'grey', stroke: 'black', opacity: 0.9 });
	pyth2_path2.set({ fill: 'grey', stroke: 'black', opacity: 0.9 });
	pyth2_path3.set({ fill: 'grey', stroke: 'black', opacity: 0.9 });
	pyth2_path4.set({ fill: 'grey', stroke: 'black', opacity: 0.9 });
	
	pyth2_path3.animate({left: 400, top: 100, angle: 90 }, {
      
	  duration: 8000,
      onChange: canvas_pytha2.renderAll.bind(canvas_pytha2),
	});
	pyth2_path4.animate({left: 100, top: 100, angle: -90 }, {
      
	  duration: 8000,
      onChange: canvas_pytha2.renderAll.bind(canvas_pytha2),
	});
	pyth2_line1.animate({left: 0, top: 99, angle: 0 }, {
      
	  duration: 8000,
      onChange: canvas_pytha2.renderAll.bind(canvas_pytha2),
	});