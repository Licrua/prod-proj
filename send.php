
 <?php
$name = htmlspecialchars(trim($_POST['name']));
$phone = htmlspecialchars(trim($_POST['phone']));

$to = "rzd.information@gmail.com";

$subject = "Форма обратной связи";

$message = "
  <html>
    <head>
      <title>$subject</title>
    </head>
    <body>
      <p><strong>Имя:</strong> $name</p>
      <p><strong>Телефон:</strong> $phone</p>
    </body>
  </html>
";

$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
$headers .= "From: rbru-metrika@yandex.ru" . "\r\n"; 

mail($to, $subject, $message, $headers);

header("Location: thankyou.html");
exit;
?>
