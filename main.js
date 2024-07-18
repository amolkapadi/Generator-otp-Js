document.getElementById('generate-btn').addEventListener('click', generateOTP);

function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
  document.getElementById('otp-display').textContent = `Your OTP is: ${otp}`;
}
