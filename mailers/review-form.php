<?php

$recepient = "ua.devicer@gmail.com";
$sitename = "Название сайта";

$reviewname = trim($_POST["review-name"]);
$reviewphone = trim($_POST["review-tel"]);
$reviewtext = trim($_POST["review-message"]);
$message = "Имя: $reviewname \nТелефон: $reviewphone \nКомментарий: $reviewtext";

$pagetitle = "Заявка на звонок с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>