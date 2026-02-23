<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Register - TripMate</title>
  
  <link rel="stylesheet" href="css/register.css">
  
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" />
</head>
<body>

  <div class="register-container">
    <a href="index.html"><i class="fas fa-times" id="form-close"></i></a>

<form action="index.php" method="POST">
    <a href="index.php"><i class="fas fa-times" id="form-close"></i></a>
    <h3>Register</h3>
    
    <input type="text" name="r_name" class="box" placeholder="Your Full Name" required>
    <input type="email" name="r_email" class="box" placeholder="Your Email" required>
    <input type="password" name="r_password" class="box" placeholder="Create Password" required>
    
    <input type="submit" name="register_submit" value="Register Now" class="btn">
    
    <p>Already have an account? <a href="index.php">Login now</a></p>
</form>
  </div>

</body>
</html>