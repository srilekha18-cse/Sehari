const signUpTab = document.getElementById('signUpTab');
const signInTab = document.getElementById('signInTab');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const emailMethod = document.getElementById('emailMethod');
const phoneMethod = document.getElementById('phoneMethod');

// Tab Switching
signUpTab.addEventListener('click', () => {
  signUpTab.classList.add('active');
  signInTab.classList.remove('active');
  signUpForm.style.display = 'flex';
  signInForm.style.display = 'none';
});

signInTab.addEventListener('click', () => {
  signInTab.classList.add('active');
  signUpTab.classList.remove('active');
  signInForm.style.display = 'flex';
  signUpForm.style.display = 'none';
});

// Email/Phone Switching
emailMethod.addEventListener('click', () => {
  emailMethod.classList.add('active');
  phoneMethod.classList.remove('active');
  document.querySelectorAll('.user-input').forEach(input => {
    input.type = 'text';
    input.placeholder = 'Email address';
  });
});

phoneMethod.addEventListener('click', () => {
  phoneMethod.classList.add('active');
  emailMethod.classList.remove('active');
  document.querySelectorAll('.user-input').forEach(input => {
    input.type = 'tel';
    input.placeholder = 'Phone number';
  });
});

// Validation functions
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

function isValidPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(div => div.textContent = '');
}

// Submit Handlers
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  const inputs = signUpForm.querySelectorAll('.user-input');
  const userValue = inputs[0].value.trim();
  const password = signUpForm.querySelector('input[name="password"]').value;
  const confirm = signUpForm.querySelector('input[name="confirm"]').value;
  const isPhone = inputs[0].type === 'tel';

  const userError = document.getElementById('signup-user-error');
  const passError = document.getElementById('signup-password-error');
  const confirmError = document.getElementById('signup-confirm-error');

  let valid = true;

  if (!(isPhone ? isValidPhone(userValue) : isValidEmail(userValue))) {
    userError.textContent = isPhone ? 'Invalid phone number' : 'Invalid email address';
    valid = false;
  }

  if (!isValidPassword(password)) {
    passError.textContent = 'Password must be 8+ chars, include number & special char';
    valid = false;
  }

  if (password !== confirm) {
    confirmError.textContent = 'Passwords do not match';
    valid = false;
  }

  if (valid) window.location.href = 'main.html';
});

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  const inputs = signInForm.querySelectorAll('.user-input');
  const userValue = inputs[0].value.trim();
  const password = signInForm.querySelector('input[name="password"]').value;
  const isPhone = inputs[0].type === 'tel';

  const userError = document.getElementById('signin-user-error');
  const passError = document.getElementById('signin-password-error');

  let valid = true;

  if (!(isPhone ? isValidPhone(userValue) : isValidEmail(userValue))) {
    userError.textContent = isPhone ? 'Invalid phone number' : 'Invalid email address';
    valid = false;
  }

  if (!isValidPassword(password)) {
    passError.textContent = 'Password must be 8+ chars, include number & special char';
    valid = false;
  }

  if (valid) window.location.href = 'main.html';
});

