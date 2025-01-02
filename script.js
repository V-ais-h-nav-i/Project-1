// Function to navigate between screens
function nextScreen(screenNumber) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(`screen${screenNumber}`).classList.add('active');
}

// Function to generate OTP
function generateOTP() {
    const phoneInput = document.getElementById('phone').value;
    const phonePattern = /^\+91\d{10}$/;

    if (phonePattern.test(phoneInput)) {
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit OTP
        alert(`Your OTP is: ${otp}`); // Simulate sending OTP
        nextScreen(2);

        // Save the OTP in session storage for validation
        sessionStorage.setItem('generatedOTP', otp);
    } else {
        alert('Please enter a valid phone number in the format +91xxxxxxxxxx.');
    }
}

// Function to validate OTP
function validateOTP() {
    const enteredOTP = document.getElementById('otp').value;
    const generatedOTP = sessionStorage.getItem('generatedOTP');

    if (enteredOTP === generatedOTP) {
        nextScreen(3);
    } else {
        alert('Invalid OTP. Please try again.');
    }
}
// Function to navigate between screens
function nextScreen(screenNumber) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(`screen${screenNumber}`).classList.add('active');
}

// Function to generate OTP
function generateOTP() {
    const phoneInput = document.getElementById('phone').value;
    const phonePattern = /^\+91\d{10}$/;

    if (phonePattern.test(phoneInput)) {
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit OTP
        alert(`Your OTP is: ${otp}`); // Simulate sending OTP
        nextScreen(2);

        // Save the OTP in session storage for validation
        sessionStorage.setItem('generatedOTP', otp);
    } else {
        alert('Please enter a valid phone number in the format +91xxxxxxxxxx.');
    }
}

// Function to validate OTP
function validateOTP() {
    const enteredOTP = document.getElementById('otp').value;
    const generatedOTP = sessionStorage.getItem('generatedOTP');

    if (enteredOTP === generatedOTP) {
        nextScreen(3);
    } else {
        alert('Invalid OTP. Please try again.');
    }
}