<?php
        $server = 'localhost';
        $username = 'root';
        $password = '';
        $database = 'subscribe';

        $connection = mysqli_connect($server, $username, $password, $database) or die(mysqli_error());

    if(isset($_POST['submit'])) {

        if (!empty($_POST['email'])){
            $email = $_POST['email'];
            $query = "SELECT * from emails where email='". $email . "'";

            $run = mysqli_query($connection,$query);

            if(mysqli_num_rows($run) > 0){
                http_response_code(403);
                return ;
            }

            $query = "INSERT INTO emails (email) VALUES ('$email')";
            $run = mysqli_query($connection,$query) or mysqli_error($connection);

            if($run) {
                echo "Great! You'd be the first to know when we launch!";
            }else {
                echo "There has been an error";
            }
        }else{
            echo "All fields are required";
        }

    }



//      include("config.php");
//     if($_SERVER['REQUEST_METHOD'] == "POST"){
//     $email=$_POST['email'];
//     $stmt = $con->prepare("insert into emails (email) values (?)");
//     $stmt->bind_param("s", $email);
//     if($stmt->execute()){
//     echo " <div class='modal fade' id='myModal' role='dialog'>
//     <div class='modal-dialog'>
//         <div class='card'>
//             <div class='text-right cross'> <i class='fa fa-times'></i> </div>
//             <div class='card-body text-center'> <img class='' src='./img/logo.png'>
//                 <h4>GREAT!</h4>
//                 <p>We'd make sure you're notified as soon as we launch!</p> <button class='btn btn-out btn-square continue'>CONTINUE</button>
//             </div>
//         </div>
//     </div>
// </div>";
//     }else{
//     echo "subscribe failed<br/>";
//     }
//     }

?>