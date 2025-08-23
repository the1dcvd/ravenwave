<?php 

$name - $_POST['name'];
$email - $_POST['email'];
$service - $_POST['service_select'];
$details - $_POST['details'];

$meilheader = "From:".$name."<".$email.">\r\n";

$recipient = "anything.andrew32@gmail.com";

mail($recipient, $service, $details)
or die("Error")

echo("Success")
?>