<?php
include_once('PHPMailer/PHPMailer.php');
$_POST = json_decode(file_get_contents("php://input"), true);
if(isset($_POST['send']))
{
            $name=$_POST['name'];
            $email=$_POST['email'];
            $msg= $_POST['message'];
            $phone= $_POST['phone'];
            $subject=$_POST['subject'];
            $messageHtml="<html>
                            <h5>Datos de contacto</h5>
                            <p>Nombre: <b>$name</b></p>
                            <p>Correo: <b>$email</b></p>
                            <p>Telefono: <b>$phone</b></p>
                            <hr>
                            <h5>Mensaje</h5>
                            <p>$msg</p>
                        </html>";

            $mail = new PHPMailer(true);

            $mail->IsSMTP();
            $mail->SMTPAuth   = false;
            $mail->Port       = 25;
            $mail->Host       = "localhost";
            $mail->Username   = "barryallen@egmaquinados.com";
            $mail->Password   = "25061996Sayan5%";

            $mail->IsSendmail();

            $mail->From       = "barryallen@egmaquinados.com";
            $mail->FromName   = "EG Maquinados: $name";

            $mail->AddAddress("d.cortesjoel@gmail.com");
            $mail->Subject  = $subject;
            $mail->WordWrap   = 80;

            $mail->MsgHTML($messageHtml);
            $mail->IsHTML(true);

            if(!$mail->Send())
            {
                $response = array( 'sent'=> false);
                echo json_encode($response);
            }
            else
            {
                $response = array( 'sent'=> true);
                echo json_encode($response);
            }

} else {
    $response = array( 'sent'=> false, 'error'=> 'no send on post');
    echo json_encode($response);
}
