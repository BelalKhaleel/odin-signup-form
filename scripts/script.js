  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const matchPassword = document.getElementById("match");

const checkPasswords = function() {
  if (password.value !== confirmPassword.value) {
    matchPassword.classList.remove('hidden');
    password.style.borderColor = '#ce6161';
    confirmPassword.style.borderColor = '#ce6161';
  } else {
    matchPassword.classList.add('hidden');
  }
}

password.addEventListener('blur', checkPasswords);

confirmPassword.addEventListener('blur', checkPasswords);