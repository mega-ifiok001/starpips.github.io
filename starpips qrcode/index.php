<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>



<?php

if (!empty($_POST['send'])) {
    $userName =  $_POST['username;'];
    $userEmail =  $_POST['useremail;'];
    $userPhone =  $_POST['userphone;'];
    $toEmail =  'ifiokaniebiet@gmail.com';
}


$mailHeader  = 'Name:' . $userName . 
"\r\n Email:" . $userEmail .
"\r\n phone:" . $userPhone .
"\r\n Message:" . $userEmail . "\r\n";


if (mail( $toEmail, $userName, $mailHeader )) {
   $message =  'your message is submitted successfully'
}

?>



    <div class="main">
        <div class="container">
            <div class="login-box">
               <img src="starpips.jpg" alt="">
                <form action="" method="post">
                    <div class="input-box" id="fullNameBox" >
                        <input type="text" name="username" id="fullName" required >
                        <label for="fullName">Full name</label>
                    </div>
                    <div class="input-box" id="emailBox" required>
                        <input type="email" name="useremail" id="email" >
                        <label for="email">Email</label>
                    </div>
                    <div class="input-box" id="phoneBox" required>
                        <input type="tel" name="userphone" id="phone" >
                        <label for="phone">Phone number</label>
                    </div>
                    <input type="submit" class="btn" id="btn"></input>
                     <?php
                     if (!empty($message)) {
                       <h1><strong>
                       <?php echo $message; ?>
                       </strong></h1>
                     }
                     ?>
                </form>
            </div>
            <span style="--i:0"></span>
            <span style="--i:1"></span>
            <span style="--i:2"></span>
            <span style="--i:3"></span>
            <span style="--i:4"></span>
            <span style="--i:5"></span>
            <span style="--i:6"></span>
            <span style="--i:7"></span>
            <span style="--i:8"></span>
            <span style="--i:9"></span>
            <span style="--i:10"></span>
            <span style="--i:11"></span>
            <span style="--i:12"></span>
            <span style="--i:13"></span>
            <span style="--i:14"></span>
            <span style="--i:15"></span>
            <span style="--i:16"></span>
            <span style="--i:17"></span>
            <span style="--i:18"></span>
            <span style="--i:19"></span>
            <span style="--i:20"></span>
            <span style="--i:21"></span>
            <span style="--i:22"></span>
            <span style="--i:23"></span>
            <span style="--i:24"></span>
            <span style="--i:25"></span>
            <span style="--i:26"></span>
            <span style="--i:27"></span>
            <span style="--i:28"></span>
            <span style="--i:29"></span>
            <span style="--i:30"></span>
            <span style="--i:31"></span>
            <span style="--i:32"></span>
            <span style="--i:33"></span>
            <span style="--i:34"></span>
            <span style="--i:35"></span>
            <span style="--i:36"></span>
            <span style="--i:37"></span>
            <span style="--i:38"></span>
            <span style="--i:39"></span>
            <span style="--i:40"></span>
            <span style="--i:41"></span>
            <span style="--i:42"></span>
            <span style="--i:43"></span>
            <span style="--i:44"></span>
            <span style="--i:45"></span>
            <span style="--i:46"></span>
            <span style="--i:47"></span>
            <span style="--i:48"></span>
            <span style="--i:49"></span>
        </div>
    </div>
    <script src="https://smtpjs.com/v3/smtp.js">
    </script>
    <script src="app.js"></script>
</body>

</html>