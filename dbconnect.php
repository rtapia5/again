<?php
session_start();
$email = $_POST['email'];

$password = $_POST['password'];


// database connection

$con = new mysqli("localhost","root","","foodorder");

if($con->connect_error) {
	die("Failed to connect : ".$con->connection_error);
} else {
	$stmt = $con->prepare("select * from user where email = ?");
	$stmt->bind_param("s", $email);
	$stmt->execute();
	$stmt_result = $stmt->get_result();
	if($stmt_result->num_rows > 0) {
		$data = $stmt_result->fetch_assoc();
		if($data['password'] === $password){
			echo "<h2>Login Successfully</h2>";
			header('Location:/main.php?msg=Login_successfull');
			$email = $data['email'];
			$_SESSION['email'] = $email;
	} else {
		echo "<h2>Invalid email or password</h2>";
	}
} else {
    echo "<h2>Invalid email or password</h2>";    
}
}
?>