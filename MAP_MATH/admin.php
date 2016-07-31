<?php 
if($_REQUEST['setuser'] == 12)
{
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>MTS - Maths Test System</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
	
	<!-- Custom CSS -->
    <link href="css/custom.css" media="screen" rel="stylesheet" type="text/css">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
	 <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Login JavaScript -->
    <script src="js/login.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" class="index">

    <!-- Header -->
     <section style="padding: 30px 0 !important;">     
	<div class="container">
		 <div class="row text-center">
			<div class="col-md-12">&nbsp;</div>
			<div class="col-md-12">&nbsp;</div>
			<div class="col-md-12">&nbsp;</div>
			<div class="intro-text">
                <div class="intro-lead-in" style="font-family: 'Droid Serif','Helvetica Neue',Helvetica,Arial,sans-serif; font-style: italic; font-size: 40px; line-height: 40px; margin-bottom: 25px;color: #5cb85c;">MTS Admin Panel</div>
            </div>
        </div>
		</div>
		<script>
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
		
		
		$( document ).ready(function() {
		$('#time_min').val(min);
		$('#time_sec').val(sec);
		
		/* for (i=0;i<numcount;i++)
		{
			var pre = num[i];
			$('#num'+pre).attr('checked', true);
		} */
		
		for (i=0;i<dencount;i++)
		{
			var pre = den[i];
			$('#den'+pre).attr('checked', true);
		}
		
		});
		</script>
		
     <div class="container">
	 <div class="col-md-4">&nbsp;</div>
	 
	
	  <div class="col-md-4">
	  <?php 
						if($_REQUEST['pub'] == 1)
						{
							echo '<div class="alert alert-success alert-dismissible fade in" role="alert">
								  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
								  </button>
								  <i class="fa fa-check-square-o" aria-hidden="true"></i> <span>Successfully Updated</span>
								</div>';
						}
						else if($_REQUEST['pub'] == 2)
						{
							echo '<div class="alert alert-danger alert-dismissible fade in" role="alert">
							  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
							  </button>
							  <i class="fa fa-ban" aria-hidden="true"></i> <span>Error while updating</span>
							</div>';
						}
	?>
		<h2 class="text-center">Quiz Settings</h2><hr/>
		<form method="post" name="myform" action="write.php">
		  <div class="form-group">			
			<div class="row">
			<div class="col-md-4">
				<div class="row">&nbsp;</div>
				<label>Time: </label>
			</div>
			<div class="col-md-4">
				<label>Mins</label>
				<input type="number" class="form-control" name="time_min" id="time_min" min="1" max="60">
			</div>
			<div class="col-md-4">
				<label>Sec</label>
				<input type="number" class="form-control" name="time_sec" id="time_sec" min="0" max="60">
			</div>
		  </div>
		  <hr>
		  <div class="form-group">
			<div class="row">
			<div class="col-md-4">
				<label>Denominator: </label>
			</div>
			<div class="col-md-8">
			<label class="checkbox-inline">
				<input type="checkbox" name="denominator[]" id="den2" value="2">2
				</label>
				<label class="checkbox-inline">
				<input type="checkbox" name="denominator[]" id="den3" value="3">3
				</label>
				<label class="checkbox-inline">
				<input type="checkbox" name="denominator[]" id="den4" value="4">4
				</label>
				<label class="checkbox-inline">
				<input type="checkbox" name="denominator[]" id="den5" value="5">5
				</label>
				<label class="checkbox-inline">
				<input type="checkbox" name="denominator[]" id="den10" value="10">10
				</label>
			</div>
			</div>
		  </div>
		  <hr>
		  <input type="submit" value="Submit" id="submit" name="submit" class="btn btn-success" />
		  <a href="index.html" class="btn btn-info" /><i class="fa fa-home">&nbsp;</i> Home</a>
		</form>
		
		</div>
	</div>
    </section>

    

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <span class="copyright">Copyright &copy; Multimedia Application Development 2016</span>
                </div>
				<div class="col-md-12">&nbsp;</div>
            </div>
        </div>
    </footer>

   
    
</body>

</html>
<?php }
else{
header("Location: login.html");
}