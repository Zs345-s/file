function validateForm() {
    let valid = true;


    

    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const genderElems = document.getElementsByName("gender");
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value.trim();
    const country = document.getElementById("country").value;

    // Validate Full Name
    if (fullName === "") {
        document.getElementById("fullNameError").innerText = "Full Name is required";
        valid = false;
    }

    // Validate Username
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required";
        valid = false;
    }

    // Validate Email
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Please enter a valid email";
        valid = false;
    }

    // Validate Password
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        valid = false;
    }

    // Validate Confirm Password
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerText = "Confirm Password is required";
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        valid = false;
    }

    // Validate Gender
    let genderSelected = false;
    for (let i = 0; i < genderElems.length; i++) {
        if (genderElems[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        document.getElementById("genderError").innerText = "Gender is required";
        valid = false;
    }

    // Validate Date of Birth
    if (dob === "") {
        document.getElementById("dobError").innerText = "Date of Birth is required";
        valid = false;
    }

    // Validate Phone Number
    if (phone === "") {
        document.getElementById("phoneError").innerText = "Phone Number is required";
        valid = false;
    }

    // Validate Country
    if (country === "") {
        document.getElementById("countryError").innerText = "Country is required";
        valid = false;
    }

    return valid;
}