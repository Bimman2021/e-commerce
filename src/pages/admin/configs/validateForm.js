export default function validateInput(input = {}) {
  const resValue = {};
  Object.entries(input).forEach((s) => {
    if (s[0] === "name") {
      if (s[1].length < 1) {
        resValue.name = "please enter your name";
      } else {
        if (!validateName(s[1])) resValue.name = "please enter a valid name";
      }
    }
    if (s[0] === "email") {
      if (s[1].length < 1) {
        resValue.email = "please enter your email";
      } else {
        if (!validateEmail(s[1])) resValue.email = "please enter a valid email";
      }
    }
    if (s[0] === "password") {
      if (s[1].length < 1) {
        resValue.password = "please enter a password";
      } else {
        if (!validatePassword(s[1]))
          resValue.password =
            "password must be at least 8 characters. containing number, uppercase and lowercase letters";
      }
    }
  });

  return resValue;
}

//validator functions

function validateEmail(email) {
  let trimmed = email.trim();
  const lower = trimmed.toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailPattern.test(lower);
  return isValid;
}

function validateName(name, isFullName) {
  // Full name regex pattern
  if (!name) return false;
  if (name.length < 3) return false;
  const trimmed = name.trim();
  const lower = trimmed.toLowerCase();
  if (isFullName) {
    return /^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(lower);
  }
  if (/^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(lower) || /^[A-Za-z]+$/.test(lower)) {
    return true;
  } else {
    return false;
  }
}

function validateMobileNumber(mobileNumber) {
  // Remove non-digit characters
  let trimmed = mobileNumber.trim();
  let number = trimmed.replace(/\D/g, "");
  // Mobile number regex pattern
  const pattern = /^[0-9]{10}$/;
  return pattern.test(number);
}

function validateDateOfBirth(dateString, is18) {
  const pattern = /^\d{4}-\d{2}-\d{2}$/;

  if (!pattern.test(dateString)) {
    return false;
  }

  const date = new Date(dateString);
  const currentDate = new Date();

  // Check if the date is a valid date
  if (isNaN(date.getTime())) {
    return false;
  }

  // Check if the date is in the future
  if (date >= currentDate) {
    return false;
  }

  // Calculate age based on the current date
  const ageInMilliseconds = currentDate - date;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);

  // Check if the user is above 18 years old
  if (is18) {
    if (ageInYears < 18) {
      return false;
    }
  }

  return true;
}

function validatePassword(password) {
  // Password length should be between 8 and 20 characters
  if (password.length < 8 || password.length > 20) {
    return false;
  }

  // Password should contain at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Password should contain at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Password should contain at least one digit
  if (!/\d/.test(password)) {
    return false;
  }

  // All criteria met, password is valid
  return true;
}

function validateString(input) {
  // Check if the input is a non-empty string
  if (typeof input !== "string" || input.trim() === "") {
    return false;
  }

  // Additional validation criteria can be added here

  // Input is valid
  return true;
}
