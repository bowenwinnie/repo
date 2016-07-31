//Question 10
	var canvas_trigo1 = new fabric.Canvas('canvas10', { backgroundColor:  '#fff' });
	var hyp_11 = ""+hypo1+"";
	var opp_11 = ""+adj_side+"";
	
	
	var tri1 = new fabric.Path('M 400 0 L 400 400 L 0 400 z');
	canvas_trigo1.add(tri1);
	
	var hyp1 = new fabric.Text(hyp_11, {  originX: 'center', originY: 'center', fontSize: 40, fontWeight: 'bold' });
	var adj = new fabric.Text(opp_11, { originX: 'center', originY: 'center', fontSize: 40, fontWeight: 'bold' });
	
	var ang1 = new fabric.Rect({
	  left: 350,
	  top: 350,
	  fill: 'grey',
	  width: 50,
	  height: 50
	});
	canvas_trigo1.add(ang1);
	
	
	var grouphyp1 = new fabric.Group([ hyp1 ], { left: 150, top: 170, opacity: 0, fill: '#000' });
	canvas_trigo1.add(grouphyp1);
	grouphyp1.animate({opacity: 1 }, {
     
	  duration: 6000,
      onChange: canvas_trigo1.renderAll.bind(canvas_trigo1),
	});
	
	var groupadj = new fabric.Group([ adj ], { left: 220, top: 320, opacity: 0, fill: '#000' });
	canvas_trigo1.add(groupadj);
	groupadj.animate({opacity: 1 }, {
	  duration: 6000,
      onChange: canvas_trigo1.renderAll.bind(canvas_trigo1),
	});	
	tri1.set({ fill: 'grey', stroke: 'white', opacity: 0.9 });
