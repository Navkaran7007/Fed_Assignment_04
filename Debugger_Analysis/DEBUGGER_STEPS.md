
# First Screenshot
# First Screenshot (Before Error Message Appears):

-The debugger is paused at line 60, where the email input field (#field_email) is selected.
-The entered email value is "nav", which is an invalid email format.
-The validateEmail function is called to check the validity of "nav".
-At this point, emailValidation is expected to return errorMessages.

# Second Screenshot (After Error Message Appears):

-The debugger is now paused at line 71, just before returning the final validation status.
-Since inputsAreValid is set to false, preventing form submission.
-The error message "Please enter a valid email address." is now displayed in red under the email input field.

# Second Screeinshot 
# First Screenshot (Before Error Message Appears):

-The debugger is paused at line 26, where the userNameInputValue is retrieved.
-The entered value for the name is "Na", which is less than 4 characters.
-The validateUserName function is called to check if "Na" meets the required criteria.
-The userNameValidation object is expected to return errorMessages.

# Second Screenshot (After Error Message Appears):

-The debugger is now paused at line 31.
-The validation for userNameInputValue has completed, and since it was invalid, an error message "Name must be at least 4 characters long" is now displayed in red under the input field.

# Third Screenshot :
# First Screenshot (Before Error Message Appears):

-Debugger paused at line 41, selecting teamNodes.
-Name, email, and date of birth are valid.
-No favorite player selected → userTypeValidation expected to fail.

# Second Screenshot (After Error Message Appears):

-Debugger paused at line 36, processing validation.
-Validation failed (isValid: false), error message "Please select a favorite player" displayed.
-Form submission stopped due to missing selection.