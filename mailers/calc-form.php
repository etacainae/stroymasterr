<?php

$recepient = "ua.devicer@gmail.com";
$sitename = "Название сайта";

$calcname = trim($_POST["calc-name"]);
$calcphone = trim($_POST["calc-phone"]);
$calcemail = trim($_POST["calc-email"]);
$calctext = trim($_POST["calc-message"]);
$repairsLevel = trim($_POST["repairs-level"]);
$housingTypes = trim($_POST["housing-types"]);
$roomsA = trim($_POST["rooms-1"]);
$roomsB = trim($_POST["rooms-2"]);
$roomsC = trim($_POST["rooms-3"]);
$roomsD = trim($_POST["rooms-4"]);
$area = trim($_POST["area"]);
$quantity = trim($_POST["quantity"]);
$message = "Имя: $calcname \nТелефон: $calcphone \nТелефон: $calcemail \nКомментарий: $calctext \nУровень ремонта: $repairsLevel \nТип жилья: $housingTypes \nКомнаты: $roomsA \nКухни: $roomsB \nСанузел: $roomsC \nКоридор: $roomsD \nПлощадь квартиры: $area \nКоличество комнат: $quantity";

$pagetitle = "Заявка на сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>