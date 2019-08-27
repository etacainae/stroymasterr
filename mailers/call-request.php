<?php

$recepient = "ua.devicer@gmail.com";
$sitename = "Название сайта";

$username = trim($_POST["user-name"]);
$userphone = trim($_POST["user-tel"]);
$usertext = trim($_POST["user-message"]);
$message = "Имя: $username \nТелефон: $userphone \nКомментарий: $usertext";

$pagetitle = "Заявка на звонок с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>