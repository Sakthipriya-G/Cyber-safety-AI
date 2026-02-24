let generatedOTP = "";

function sendOTP() {
    const username = document.getElementById("username").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    if (!username) { alert("Enter your name"); return; }
    if (mobile.length !== 10 || isNaN(mobile)) { alert("Enter a valid 10-digit mobile"); return; }

    generatedOTP = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("otpDisplay").innerText = "Your OTP: " + generatedOTP;
    alert("OTP sent! Check below for OTP.");
    document.getElementById("otpDiv").style.display = "block";
}

function verifyOTP() {
    const userOTP = document.getElementById("otp").value.trim();
    const username = document.getElementById("username").value.trim();
    if (!username) { alert("Enter your name"); return; }

    if (userOTP === generatedOTP.toString()) {
        alert("Login Successful!");
        localStorage.setItem("username", username);
        window.location.href = "dashboard.html";
    } else { alert("Invalid OTP"); }
}

function logout() {
    localStorage.removeItem("username");
    window.location.href = "index.html";
}

function submitReport() {
    const name = document.getElementById("reportName").value.trim();
    const mobile = document.getElementById("reportMobile").value.trim();
    const details = document.getElementById("reportDetails").value.trim();
    if (!name || !mobile || !details) { alert("Fill all fields"); return; }
    document.getElementById("reportStatus").innerText = "Report submitted successfully! ✅";
    document.getElementById("reportName").value = "";
    document.getElementById("reportMobile").value = "";
    document.getElementById("reportDetails").value = "";
}

window.onload = function() {
    const username = localStorage.getItem("username");
    if (username && window.location.href.includes("index.html")) { window.location.href = "dashboard.html"; }
    if (username && document.getElementById("welcomeMsg")) { document.getElementById("welcomeMsg").innerText = "Welcome, " + username; }
};