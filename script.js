const lock = document.querySelector('.lock');
const passwordInput = document.querySelector('.password-input');
const unlockButton = document.querySelector('.unlock-button');

unlockButton.addEventListener('click', () => {
  if (passwordInput.value === '822701') {
    alert('Access Granted! Redirecting...');
    window.location.replace('https://sites.google.com/stu.cfisd.net/rhsssvq24k0-iopwfrjw445wskvrr/home');
  } else {
    lock.classList.add('shake');
    setTimeout(() => {
      lock.classList.remove('shake');
    }, 500);
  }
});
