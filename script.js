const userFormNode = document.querySelector("#user-survey");

userFormNode.addEventListener("submit", (eventObj) => {
    eventObj.preventDefault(); 
    const inputsAreValid = validateUserForm();
    
    if (inputsAreValid) {
        userFormNode.submit(); 
    } else {
        console.warn("Invalid inputs");
    }
});
function validateUserForm() {
    const errorMessageNodes = document.querySelectorAll(".input-error");
    errorMessageNodes.forEach(n => n.remove());
    
    let inputsAreValid = true;
    
    const userNameInputNode = document.querySelector("#field_name");
    const userNameInputValue = escapeHTML(userNameInputNode.value);
    
    const userNameValidation = validateUserName(userNameInputValue);
    
    if (!userNameValidation["isValid"]) {
        inputsAreValid = false;
        userNameValidation["errorMessages"].forEach(m => {
            displayInputError(userNameInputNode.parentElement, m);
        });
    }
    
    const userTypeNodes = document.querySelectorAll("input[name='user_selection']");
    const userTypeValidation = validateUserType(userTypeNodes);
    
    if (!userTypeValidation["isValid"]) {
        inputsAreValid = false;
        userTypeValidation["errorMessages"].forEach(m => {
            displayInputError(userTypeNodes[0].parentElement, m);
        });
    }

    const teamNodes = document.querySelectorAll("input[name='user-choice']");
    const teamValidation = validateTeamSelection(teamNodes);
    
    if (!teamValidation["isValid"]) {
        inputsAreValid = false;
        teamValidation["errorMessages"].forEach(m => {
            displayInputError(teamNodes[0].parentElement.parentElement, m);
        });
    }

    const otherFavNode = document.querySelector("#Other_favorites");
    const otherFavValidation = validateOtherFavorites(otherFavNode.value);
    
    if (!otherFavValidation["isValid"]) {
        inputsAreValid = false;
        otherFavValidation["errorMessages"].forEach(m => {
            displayInputError(otherFavNode.parentElement, m);
        });
    }
    const emailInputNode = document.querySelector("#field_email");
    const emailInputValue = escapeHTML(emailInputNode.value.trim());
    
    const emailValidation = validateEmail(emailInputValue);
    if (!emailValidation["isValid"]) {
        inputsAreValid = false;
        emailValidation["errorMessages"].forEach(m => {
            displayInputError(emailInputNode.parentElement, m);
        });
    }   
    
    return inputsAreValid;
}

function validateEmail(emailValue) {
    const result = {
        isValid: true,
        errorMessages: []
    };

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(emailValue)) {
        result.isValid = false;
        result.errorMessages.push("Please enter a valid email address.");
    }

    return result;
}

function validateUserName(nameValue) {
    const result = {
        isValid: true,
        errorMessages: []
    };
    
    if (!nameValue || nameValue.trim() === "") {
        result.isValid = false;
        result.errorMessages.push("Name Field is blank");
    } else if (nameValue.length < 4) {
        result.isValid = false;
        result.errorMessages.push("Name must be at least 4 characters long");
    }
    
    return result;
}

function validateUserType(radioNodes) {
    const result = {
        isValid: true,
        errorMessages: []
    };
    
    let selected = false;
    radioNodes.forEach(node => {
        if (node.checked) selected = true;
    });
    
    if (!selected) {
        result.isValid = false;
        result.errorMessages.push("Please your a favorite player");
    }
    
    return result;
}

function validateTeamSelection(checkboxNodes) {
    const result = {
        isValid: true,
        errorMessages: []
    };
    
    let selected = false;
    checkboxNodes.forEach(node => {
        if (node.checked) selected = true;
    });
    
    if (!selected) {
        result.isValid = false;
        result.errorMessages.push("Please select at least one favorite team");
    }
    
    return result;
}

function validateOtherFavorites(selectValue) {
    const result = {
        isValid: false,
        errorMessages: []
    };
    
    if (selectValue === "Other_favorites") {
        result.isValid = true;
        result.errorMessages.push("Please select a favorite player");
    }
    
    return result;
}

function displayInputError(InputElement, errorMessage) {
    const errorElement = document.createElement("span");
    errorElement.classList.add("input-error");
    errorElement.textContent = errorMessage;
    errorElement.setAttribute("role", "alert");
    InputElement.appendChild(errorElement);
}

function escapeHTML(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}