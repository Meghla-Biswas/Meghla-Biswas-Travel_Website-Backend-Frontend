<?php

session_start(); 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "travel_db";


$conn = new mysqli("localhost", "root", "", "travel_db");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$is_logged_in = isset($_SESSION['user_email']);


if (isset($_POST['submit_booking'])) {
    
  
    if ($is_logged_in) {
        $email = $_SESSION['user_email'];
        $can_proceed = true; 
    } else {
        $email = mysqli_real_escape_string($conn, $_POST['user_email']);
        $pass = $_POST['user_pass'];

   
        $checkUser = "SELECT * FROM users WHERE email='$email'";
        $result = $conn->query($checkUser);

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
          
            if (password_verify($pass, $user['password'])) {
                $can_proceed = true;
            } else {
                echo "<script>alert('Invalid Password!'); window.history.back();</script>";
                exit();
            }
        } else {
            echo "<script>alert('User not found! Please register.'); window.location.href='index.php';</script>";
            exit();
        }
    }

    if ($can_proceed) {
      
        $city = mysqli_real_escape_string($conn, $_POST['city_name']);
        $date = mysqli_real_escape_string($conn, $_POST['booking_date']);
        $duration = (int)$_POST['duration'];
        $people = (int)$_POST['num_people'];
        $room = mysqli_real_escape_string($conn, $_POST['room_type']);
        $cost = (float)$_POST['total_cost'];

        
        $sql = "INSERT INTO bookings (user_email, user_pass, city_name, booking_date, duration, num_people, room_type, total_cost) 
                VALUES ('$email', 'LOGGED_IN_USER', '$city', '$date', '$duration', '$people', '$room', '$cost')";

        if ($conn->query($sql) === TRUE) {
            echo "<script>
                    document.addEventListener('DOMContentLoaded', function() {
                        var congrats = document.getElementById('congratsModal');
                        if(congrats) congrats.classList.add('show');
                    });
                  </script>";
        } else {
            echo "Error: " . $conn->error;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Package Details</title>
  <link rel="stylesheet" href="css/package-details.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

 
  
  <a href="javascript:history.back()" class="back-arrow">
    <i class="fa fa-arrow-left"></i>
  </a>

  
  
  <section class="page-header">
    <h1 class="floating-title">Package Details</h1>
  </section>

 
  <div class="page-wrapper">
    <div class="details-container">

      
      <div class="slideshow">
        <div class="slides"></div>
      </div>

     
      <div class="details-content">
        <h2 id="city-name">Tour Package</h2>

        <ul id="services-list">
          <li data-service="hotel">Hotel: The Taj Palace (<span id="days">1</span> nights)</li>
          <li data-service="breakfast">Meals: Breakfast</li>
          <li data-service="dinner">Meals: Dinner</li>
          <li data-service="tour">City Tour & Guidance</li>
          <li data-service="transport">Airport Transport</li>
        </ul>

        <p><strong>Price per day:</strong> $<span id="price">100</span></p>
        <p><strong>Total cost:</strong> $<span id="total-cost">100</span></p>

        <div class="buttons">
          <a class="btn book-btn" href="#">Book Now</a>
          <button class="adjust-btn btn">Adjust Package ⚙️</button>
        </div>
      </div>
    </div>
  </div>

  
  <div id="adjustModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h3>Adjust Your Package</h3>

      <label>
        Start Date:
        <input type="date" id="adjust-start" />
      </label>

      <label>
        Duration (days):
        <input type="number" id="adjust-days" value="1" min="1" />
      </label>

      <label>
        Number of People:
        <input type="number" id="num-people" value="1" min="1" />
      </label>

      <label>
        Room Type:
        <select id="room-type">
          <option value="single">Single Bed</option>
          <option value="double" selected>Double Bed</option>
          <option value="suite">Suite</option>
        </select>
      </label>

      <div class="options">
        <label><input type="checkbox" id="opt-breakfast" checked> Include Breakfast 🍳</label>
        <label><input type="checkbox" id="opt-dinner" checked> Include Dinner 🍽️</label>
        <label><input type="checkbox" id="opt-tour" checked> Include City Tour 🏛️</label>
        <label><input type="checkbox" id="opt-transport" checked> Include Airport Transport 🚗</label>
      </div>

      <button class="btn update-btn">Update</button>
    </div>
  </div>

 
  <div id="bookingModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Booking Summary</h2>
      <ul>
        <li>City: <span id="city-name-confirm"></span></li>
        <li>Duration: <span id="confirm-days"></span> days</li>
        <li>Start Date: <span id="confirm-start"></span></li>
        <li>End Date: <span id="confirm-end"></span></li>
        <li>Number of People: <span id="confirm-people"></span></li>
        <li>Room Type: <span id="confirm-room"></span></li>
        <li>Services:</li>
        <ul id="confirm-services"></ul>
        <li>Total Cost: $<span id="confirm-cost"></span></li>
      </ul>
      <button class="btn book-confirm">Confirm Booking</button>
    </div>
  </div>

<div id="infoModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Enter Your Information</h2>
      <form id="infoForm" method="POST" action="">
    <input type="hidden" name="city_name" id="db-city">
    <input type="hidden" name="booking_date" id="db-date">
    <input type="hidden" name="duration" id="db-duration">
    <input type="hidden" name="num_people" id="db-people">
    <input type="hidden" name="room_type" id="db-room">
    <input type="hidden" name="total_cost" id="db-total">
    <input type="hidden" name="submit_booking" value="1">

    <label>Full Name: 
        <input type="text" name="user_name" id="user-name" 
        value="<?php echo $is_logged_in ? $_SESSION['user_name'] : ''; ?>" 
        <?php echo $is_logged_in ? 'readonly' : 'required'; ?> />
    </label>

    <label>Email: 
        <input type="email" name="user_email" id="user-email" 
        value="<?php echo $is_logged_in ? $_SESSION['user_email'] : ''; ?>" 
        <?php echo $is_logged_in ? 'readonly' : 'required'; ?> />
    </label>

    <?php if(!$is_logged_in): ?>
        <label>Password: <input type="password" name="user_pass" id="user-pass" required /></label>
    <?php else: ?>
        <input type="hidden" name="user_pass" value="SESSION_LOGGED_IN">
    <?php endif; ?>
    
    <button type="button" class="btn submit-info" >Next</button>
</form>
    </div>
    </div>

  
  <div id="congratsModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>🎉 Congratulations!</h2>
      <p>Your booking has been confirmed successfully.</p>
      <button class="btn congrats-ok">OK 👍</button>
    </div>
  </div>

  <script src="js/package-details.js"></script>
</body>
</html>
