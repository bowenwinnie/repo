var sol = [02, 03, 02, 01, 04, 03, 02, 01, 01, 04];
var acSol = new Array();
var score = 0;
$('.bs-example').hide();

		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.open("GET","test-settings.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 
		
		var min = xmlDoc.getElementsByTagName("min")[0].childNodes[0].nodeValue;
		var sec = xmlDoc.getElementsByTagName('sec')[0].childNodes[0].nodeValue;
		//var numcount = xmlDoc.getElementsByTagName('numcount')[0].childNodes[0].nodeValue;
		var dencount = xmlDoc.getElementsByTagName('dencount')[0].childNodes[0].nodeValue;
		/* var num = new Array();
		for (i=0;i<numcount;i++)
		{
			num[i] = xmlDoc.getElementsByTagName("num"+i)[0].childNodes[0].nodeValue;
		}  */
		
		var den = new Array();
		for (i=0;i<dencount;i++)
		{
			den[i] = xmlDoc.getElementsByTagName("den"+i)[0].childNodes[0].nodeValue;
		} 
		
		var timemin = min;
		var timesec = sec;		

function validate(answer, optionClass, qIndex) {
  acSol[qIndex] = answer;
  lockQuestion("q"+optionClass);
  dispResult(qIndex);
}

function dispResult(qIndex) {
  if(sol[qIndex] == acSol[qIndex]) 
  {
	playSuccess();
	$('#sol'+qIndex).html('<div class="col-md-3"><img src="img/correct-smiley.gif" class="img-responsive" style="border:0" alt="Answer is Correct" /></div><div class="col-md-9">Yes, It was the correct answer</div><div class="col-md-4">');
	score++;
  } 
  else 
  {
    playFail();
	$('#sol'+qIndex).html('<div class="col-md-3"><img src="img/incorrect-smiley.gif" class="img-responsive" style="border:0" alt="Answer is Correct" /></div><div class="col-md-9">Sorry, It was the wrong answer. The correct answer is option '+sol[qIndex]+'</div><div class="col-md-4">');
	$('#sol_demo_'+qIndex).show();
      if(qIndex==0)
      {
          domloaded_add_first();
      }
      if(qIndex==1)
      {
          domloaded_add_second();
      }
      if(qIndex==2)
      {
          domloaded_sub();
      }
	  if(qIndex==3)
      {
          domloaded_sub1();
      }
	  if(qIndex==4)
      {
          domloaded_reduce();
      }
	   if(qIndex==5)
      {
          domloaded_reduce1();
      }

  }
}

function lockQuestion(optionClass)
{
$('.'+optionClass).attr('disabled',true);
}

function evaluateScore()
{	var points = score*15;
	if(score<5)
	{
		var message = "<h4> You need to work hard! </h4><p>You have answered "+score+" out of 10 questions.</p><p> Your score is </p>"+points;
	}
	else if(score==5)
	{
		var message = "<h4> You can do better! </h4><p>You have answered "+score+" out of 10 questions.</p><p> Your score is </p>"+points;
	}
	else if(score>5)
	{
		var message = "<h4> You did well! </h4><p>You have answered "+score+" out of 10 questions.</p><p> Your score is </p>"+points;
	}
	
  $('#score_report').html(message);
}
 function playSuccess() {
     var audio = document.createElement("audio");
    audio.setAttribute("autoplay", true);
    var source = document.createElement("source");
    source.setAttribute("src", "img/cheer.mp3");
    audio.appendChild(source);
    document.getElementById("testSound").appendChild(audio);
  }
  function playFail() {
    var audio = document.createElement("audio");
    audio.setAttribute("autoplay", true);
    var source = document.createElement("source");
    source.setAttribute("src", "img/boo3.mp3");
    audio.appendChild(source);
    document.getElementById("testSound").appendChild(audio);

  }
 