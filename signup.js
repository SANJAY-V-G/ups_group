const signupForm = document.querySelector("#signup-form");
const formMessage = document.querySelector("#form-message");
const dateOfBirthInput = document.querySelector("#dob");
const usernameInput = document.querySelector("#username");

if (signupForm && formMessage && dateOfBirthInput && usernameInput) {
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const dateOfBirth = new Date(`${dateOfBirthInput.value}T00:00:00`);
        const username = usernameInput.value.trim();

        if (dateOfBirth > new Date()) {
            formMessage.textContent = "Date of birth cannot be in the future.";
            formMessage.className = "error";
            dateOfBirthInput.focus();
            return;
        }

        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            formMessage.textContent = "Username can contain only letters, numbers, and underscores.";
            formMessage.className = "error";
            usernameInput.focus();
            return;
        }

        formMessage.textContent = "Your account details are ready to be submitted.";
        formMessage.className = "success";
        signupForm.reset();
    });
}
