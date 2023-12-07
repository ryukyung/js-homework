const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
const checkEmail = () => {
  const userEmailInput = document.querySelector('.user-email-input');
  const isValid = emailReg(userEmailInput.value);

  if (!isValid || userEmailInput.value != user.id) {
    userEmailInput.classList.add('is--invalid');
    return false;
  } else {
    userEmailInput.classList.remove('is--invalid');
    return true;
  }
};
const checkPw = () => {
  const userPwInput = document.querySelector('.user-password-input');
  const isValid = pwReg(userPwInput.value);
  if (!isValid || userPwInput.value != user.pw) {
    userPwInput.classList.add('is--invalid');
    return false;
  } else {
    userPwInput.classList.remove('is--invalid');
    return true;
  }
};
document.querySelector('.btn-login').addEventListener('click', (e) => {
  e.preventDefault();

  if (checkEmail() && checkPw()) {
    window.location.href = './welcome.html';
  } else {
    return false;
  }
});
