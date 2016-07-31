<?php
if(isset($_POST['submit']))
{
		
		
		$j = 0;
		foreach($_POST['denominator'] as $selected) {
		$j++;
		}		
		
		$xml = new DOMDocument("1.0");
		$xml->formatOutput = true;
		$testsettings = $xml->createElement("testsettings");
		$xml->appendChild($testsettings);
		
		$item = $xml->createElement("item");
		$testsettings->appendChild($item);
		
		$time_min = $xml->createElement("min",$_POST['time_min']);
		$item->appendChild($time_min);
		$time_sec = $xml->createElement("sec",$_POST['time_sec']);
		$item->appendChild($time_sec); 
		
		$den_count = $xml->createElement("dencount",$j);
		$item->appendChild($den_count);
		
		
		$j = 0;
		foreach($_POST['denominator'] as $selected) {
		$deno = $xml->createElement("den".$j,$selected);
		$item->appendChild($deno);
		$j++;
		}
		
		if($xml->save("test-settings.xml"))
		{
		header("Location: admin.php?setuser=12&pub=1");
		}
		else
		{
		header("Location: admin.php?setuser=12&pub=2");
		}
		
}  
?>