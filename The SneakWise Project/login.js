document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    // Set form message
    function setFormMessage(formElement, type, message) {
        const messageElement = formElement.querySelector(".form__message");
        messageElement.textContent = message;
        messageElement.classList.remove("form__message--success", "form__message--error");
        messageElement.classList.add(`form__message--${type}`);
    }

    // Set input error
    function setInputError(inputElement, message) {
        inputElement.classList.add("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
    }

    // Clear input error 
    function clearInputError(inputElement) {
        inputElement.classList.remove("form__input--error");
        inputElement.classList.add("form__input-success");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
    }

    // Function to clear form inputs
    function clearFormInputs(formElement) {
        const inputElements = formElement.querySelectorAll(".form__input");
        inputElements.forEach(input => {
            input.value = "";
            input.classList.remove("form__input-success");
        });
    }

    //Event listener for creating a new account
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        const usernameInput = createAccountForm.querySelector("#signupUsername");
        const passwordInput = createAccountForm.querySelector(".form__input[type='password']");
        const confirmPasswordInput = createAccountForm.querySelector(".form__input[type='password'][placeholder='Confirm password']");

        let isValid = true;

        // Validate username
        if (usernameInput.value.length < 8) {
            setInputError(usernameInput, "Username must be at least 8 characters long");
            isValid = false;
        } else {
            clearInputError(usernameInput);
        }

        // Validate password
        if (passwordInput.value.length < 8) {
            setInputError(passwordInput, "Password must be at least 8 characters long");
            isValid = false;
        } else {
            clearInputError(passwordInput);
        }

        // Validate confirm password
        if (passwordInput.value !== confirmPasswordInput.value) {
            setInputError(confirmPasswordInput, "Passwords do not match");
            isValid = false;
        } else {
            clearInputError(confirmPasswordInput);
        }

        // If all inputs are valid, proceed with account creation
        if (isValid) {
            // Store username and password in local storage
            localStorage.setItem("username", usernameInput.value);
            localStorage.setItem("password", passwordInput.value);

            // Hide/redirect from the create account form and show the login form
            createAccountForm.classList.add("form--hidden");
            loginForm.classList.remove("form--hidden");

            // Clear the form inputs
            clearFormInputs(createAccountForm);

            // Remove the success message after 5 seconds - not in use at the moment due to alternate approach of redirection
            setTimeout(() => {
                setFormMessage(createAccountForm, "success", "");
            }, 50000);
        }
    });

    // Login form submission event listener
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        const usernameInput = loginForm.querySelector(".form__input[type='text']");
        const passwordInput = loginForm.querySelector(".form__input[type='password']");
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Retrieve stored username and password from local storage
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        // Validate username and password
        if (username === storedUsername && password === storedPassword) {
            // Redirect to the dashboard
            window.location.href = "dashboard.html";
        } else {
            // Display error message
            setFormMessage(loginForm, "error", "Invalid username or password");
        }
    });

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        setFormMessage(createAccountForm, "success", "");
        clearFormInputs(createAccountForm);
    });

    // Username input event listener
    const usernameInput = createAccountForm.querySelector("#signupUsername");
    usernameInput.addEventListener("input", e => {
        if (e.target.value.length < 8) {
            setInputError(e.target, "Username must be at least 8 characters long");
        } else {
            clearInputError(e.target);
        }
    });

    // Passsword input event listener
    const passwordInput = createAccountForm.querySelector(".form__input[type='password']");
    passwordInput.addEventListener("input", e => {
        if (e.target.value.length < 8) {
            setInputError(e.target, "Password must be at least 8 characters long");
        } else {
            clearInputError(e.target);
        }
    });

    // Confirm password event listener 
    const confirmPasswordInput = createAccountForm.querySelector(".form__input[type='password'][placeholder='Confirm password']");
    confirmPasswordInput.addEventListener("input", e => {
        if (passwordInput.value !== e.target.value) {
            setInputError(e.target, "Passwords do not match");
        } else {
            clearInputError(e.target);
        }
    });
});
