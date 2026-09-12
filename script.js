function showSignup() {
    const login = document.getElementById("loginForm");
    const signup = document.getElementById("signupForm");

    // Current form immediately disappears
    login.classList.add("hidden");

    // Next form appears
    signup.classList.remove("hidden");
    signup.classList.remove("switching");

    void signup.offsetWidth;

    signup.classList.add("switching");
}


function showLogin() {
    const signup = document.getElementById("signupForm");
    const login = document.getElementById("loginForm");

    // Current form immediately disappears
    signup.classList.add("hidden");

    // Next form appears
    login.classList.remove("hidden");
    login.classList.remove("switching");

    void login.offsetWidth;

    login.classList.add("switching");
}

function signup(event) {

    event.preventDefault();

    const name =
        document.getElementById("signupName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const phone =
        document.getElementById("signupPhone").value.trim();

    const password =
        document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }


    // Password validation
    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }


    // Confirm password
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }


    // Store user temporarily
    const user = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };

    localStorage.setItem(
        "tournexUser",
        JSON.stringify(user)
    );


    alert("Account created successfully! 🎉");

    showLogin();
}


function login(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const savedUser =
        JSON.parse(localStorage.getItem("tournexUser"));


    // Account இல்லையென்றால்
    if (!savedUser) {

        alert("No account found. Please Sign Up first.");

        return;
    }


    // Email + Password correct
    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        // Success screen-ஐ show பண்ணும்
        const successScreen =
            document.getElementById("successScreen");

        successScreen.classList.add("show");


        // 1.4 seconds கழித்து Home page
        setTimeout(function () {

            window.location.href = "home.html";

        }, 1400);


    } else {

        // Wrong login
        alert("Invalid email or password.");

    }
}