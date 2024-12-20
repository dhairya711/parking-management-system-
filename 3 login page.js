// Function to confirm OTP
function confirmOTP() {
    const otpInput = document.getElementById('otp').value;
    if (otpInput === '') {
        alert('Please enter the OTP!');
    } else {
        document.getElementById('confirmation-message').innerText = 'OTP Verified! Your registration is successful.';
        // Redirect to the login page after a short delay
        setTimeout(() => {
            window.location.href = '3 after login page.html'; // Change 'login.html' to the actual name of your login page
        }, 2000); // Redirects after 2 seconds
    }
}