// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "travel_db";


// $conn = new mysqli("localhost", "root", "", "travel_db");

// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// if (isset($_POST['submit_booking'])) {
 
//     $email = $_POST['user_email'];
//     $pass = $_POST['user_pass'];
//     $city = $_POST['city_name'];
//     $date = $_POST['booking_date'];
//     $duration = (int)$_POST['duration'];
//     $people = (int)$_POST['num_people'];
//     $room = $_POST['room_type'];
//     $cost = (float)$_POST['total_cost'];

 
//     $sql = "INSERT INTO bookings (user_email, user_pass, city_name, booking_date, duration, num_people, room_type, total_cost) 
//             VALUES ('$email', '$pass', '$city', '$date', '$duration', '$people', '$room', '$cost')";

//     if ($conn->query($sql) === TRUE) {
     
//         echo "<script>
//                 document.addEventListener('DOMContentLoaded', function() {
//                     var congrats = document.getElementById('congratsModal');
//                     if(congrats) congrats.classList.add('show');
//                 });
//               </script>";
//     } else {
      
//         echo "Error: " . $sql . "<br>" . $conn->error;
//     }
// }