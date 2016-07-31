var hypo = Math.floor((Math.random() * 10) + 1);
$('#hypo-length').html(hypo);
var sine_angle = 0.7071;

var res_side = Math.floor(hypo*sine_angle);
$('#q9-op1').html(res_side);
$('#q9-op2').html(res_side+2);
$('#q9-op3').html(res_side+4);
$('#q9-op4').html(res_side+3);

var hypo1 = Math.floor((Math.random() * 10) + 1);
$('#hypo-length1').html(hypo1);
var cosine_angle1 = 0.8660;

var adj_side = Math.floor(hypo1*cosine_angle1);
$('#q10-op1').html(adj_side+2);
$('#q10-op2').html(adj_side+3);
$('#q10-op3').html(adj_side+4);
$('#q10-op4').html(adj_side);


	var canvas_trigo = new fabric.Canvas('canvas9', { backgroundColor:  '#fff' });
	var hyp_1 = ""+hypo+"";
	var opp_1 = ""+res_side+"";
	
	
	var tri = new fabric.Path('M 400 0 L 400 400 L 0 400 z');
	canvas_trigo.add(tri);
	
	var hyp = new fabric.Text(hyp_1, {  originX: 'center', originY: 'center', fontSize: 40, fontWeight: 'bold' });
	var opp = new fabric.Text(opp_1, { originX: 'center', originY: 'center', fontSize: 40, fontWeight: 'bold' });
	
	var ang = new fabric.Rect({
	  left: 350,
	  top: 350,
	  fill: 'grey',
	  width: 50,
	  height: 50
	});
	canvas_trigo.add(ang);
	
	
	var grouphyp = new fabric.Group([ hyp ], { left: 150, top: 170, opacity: 0, fill: '#000' });
	canvas_trigo.add(grouphyp);
	grouphyp.animate({opacity: 1 }, {
     	
	  duration: 6000,
      onChange: canvas_trigo.renderAll.bind(canvas_trigo),
	});
	
	var groupopp = new fabric.Group([ opp ], { left: 360, top: 170, opacity: 0, fill: '#000' });
	canvas_trigo.add(groupopp);
	groupopp.animate({opacity: 1 }, {
	  duration: 6000,
      onChange: canvas_trigo.renderAll.bind(canvas_trigo),
	});	
	tri.set({ fill: 'grey', stroke: 'white', opacity: 0.9 });
	
	