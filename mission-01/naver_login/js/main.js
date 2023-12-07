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
const checkInput = (inputElement, isValid, userProperty) => {
  if (!isValid || inputElement.value !== user[userProperty]) {
    inputElement.classList.add('is--invalid');
    return false;
  } else {
    inputElement.classList.remove('is--invalid');
    return true;
  }
};
const checkEmail = () => {
  const userEmailInput = document.querySelector('.user-email-input');
  return checkInput(userEmailInput, emailReg(userEmailInput.value), 'id');
};

const checkPw = () => {
  const userPwInput = document.querySelector('.user-password-input');
  return checkInput(userPwInput, pwReg(userPwInput.value), 'pw');
};

document.querySelector('.btn-login').addEventListener('click', (e) => {
  e.preventDefault();
  if (checkEmail() && checkPw()) {
    window.location.href = './welcome.html';
  } else {
    return false;
  }
});
