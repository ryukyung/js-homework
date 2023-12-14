const emailInput = document.querySelector('.user-email-input');
const pwInput = document.querySelector('.user-password-input');
const loginButton = document.querySelector('.btn-login');

const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};
let isValid = {
  email: false,
  pw: false,
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

/**
 * 입력 요소의 유효성 검사 함수
 * @param {function} validationFunction - 유효성 검사 함수
 * @param {HTMLInputElement} element - 유효성 검사할 입력 요소
 * @param {string} validationType - 유효성 검사 유형
 */
const inputValidate = (validationFunction, element, validationType) => {
  if (validationFunction(element.value)) {
    element.classList.remove('is--invalid');
    isValid[validationType] = true;
  } else {
    element.classList.add('is--invalid');
    isValid[validationType] = false;
  }
};

// 이메일 입력 요소 유효성 검사
const emailValidate = () => inputValidate(emailReg, emailInput, 'email');

// 비밀번호 입력 요소 유효성 검사
const pwValidate = () => inputValidate(pwReg, pwInput, 'pw');

const clickLoginButton = (e) => {
  e.preventDefault();
  if (!(isValid.email && isValid.pw)) return;

  if (user.id === emailInput.value && user.pw === pwInput.value) {
    location.href = 'welcome.html';
  } else {
    alert('입력한 정보가 올바르지 않습니다. 다시 시도해주세요.');
  }
};

// 이벤트 핸들러
emailInput.addEventListener('input', emailValidate);
pwInput.addEventListener('input', pwValidate);
loginButton.addEventListener('click', clickLoginButton);
