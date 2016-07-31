
var a = Math.floor((Math.random() * 10) + 1);
var b = Math.floor((Math.random() * 10) + 1);
var c;

$('#pytha-eq1').html("<p style='font-size: 18px;'>"+a+"<sup>2</sup>&nbsp;+&nbsp;"+b+"<sup>2</sup>&nbsp;=&nbsp;?</p>");

c = Math.floor(Math.sqrt(a*a + b*b));
var option1_pytha = c + 3;
var option3_pytha = c + 5;
var option4_pytha = c + 4;
$('#q7-op2').html(c+"<sup>2</sup>");
$('#q7-op1').html(option1_pytha+"<sup>2</sup>");
$('#q7-op3').html(option3_pytha+"<sup>2</sup>");
$('#q7-op4').html(option4_pytha+"<sup>2</sup>");


// create a wrapper around native canvas element (with id="c")
	var canvas_pytha = new fabric.Canvas('canvas7', { backgroundColor:  '#fff' });
    var pyth_line1 = new fabric.Line([50, 100, 150, 100], {
        left: 0,
        top: 0,
        stroke: 'white'
    });
	var a_char = ""+a+"";
	var b_char = ""+b+"";
	var c_char = ""+c+"";
	canvas_pytha.add(pyth_line1);
	var pyth_path1 = new fabric.Path('M 100 0 L 400 0 L 400 100 z');
	canvas_pytha.add(pyth_path1);
	var pyth_path2 = new fabric.Path('M 400 100 L 400 400 L 300 400 z');
	canvas_pytha.add(pyth_path2);
	var pyth_path3 = new fabric.Path('M 300 400 L 0 400 L 0 300 z');
	canvas_pytha.add(pyth_path3);
	var pyth_path4 = new fabric.Path('M 0 300 L 0 0 L 100 0 z');
	canvas_pytha.add(pyth_path4);
	var atext = new fabric.Text(a_char, {  originX: 'center', originY: 'center', fontSize: 40, fontWeight: 'bold' });
	var btext = new fabric.Text(b_char, { originX: 'center', originY: 'center', fontSize: 40, fontWeight: 'bold' });
	var texta2 = new fabric.Text('2', {  left: 15, top: -29, fontSize: 20, fontWeight: 'bold' });
	var textb2 = new fabric.Text('2', {  left: 15, top: -29, fontSize: 20, fontWeight: 'bold' });
	var ctext = new fabric.Text(c_char, {  originX: 'center', originY: 'center', fontSize: 40, fontWeight: 'bold' });
	var textc2 = new fabric.Text('2', {  left: 15, top: -29, fontSize: 20, fontWeight: 'bold' });
	var groupa = new fabric.Group([ atext, texta2 ], { left: 35, top: 25, opacity: 0, fill: '#000' });
	canvas_pytha.add(groupa);
	groupa.animate({opacity: 1 }, {
     
	  duration: 8000,
      onChange: canvas_pytha.renderAll.bind(canvas_pytha),
	});
	var groupb = new fabric.Group([ btext, textb2 ], { left: 130, top: 220, opacity: 0, fill: '#000' });
	canvas_pytha.add(groupb);
	groupb.animate({opacity: 1 }, {
      
	  duration: 8000,
      onChange: canvas_pytha.renderAll.bind(canvas_pytha),
	});
	var groupc = new fabric.Group([ ctext, textc2 ], { left: 200, top: 170, opacity: 1, fill: '#000' });
	canvas_pytha.add(groupc);
	groupc.animate({opacity: 0 }, {
      
	  duration: 8000,
      onChange: canvas_pytha.renderAll.bind(canvas_pytha),
	});
	pyth_path1.set({ fill: 'grey', stroke: 'black', opacity: 0.9 });
	pyth_path2.set({ fill: 'grey', stroke: 'black', opacity: 0.9 });
	pyth_path3.set({ fill: 'grey', stroke: 'black', opacity: 0.9 });
	pyth_path4.set({ fill: 'grey', stroke: 'black', opacity: 0.9 });
	
	pyth_path3.animate({left: 400, top: 100, angle: 90 }, {
      
	  duration: 8000,
      onChange: canvas_pytha.renderAll.bind(canvas_pytha),
	});
	pyth_path4.animate({left: 100, top: 100, angle: -90 }, {
      
	  duration: 8000,
      onChange: canvas_pytha.renderAll.bind(canvas_pytha),
	});
	pyth_line1.animate({left: 0, top: 99, angle: 0 }, {
      
	  duration: 8000,
      onChange: canvas_pytha.renderAll.bind(canvas_pytha),
	});