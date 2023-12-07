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
/**
 * 사용자 입력의 유효성 확인
 * @param {HTMLElement} inputElement - 유효성 검사할 입력 요소
 * @param {boolean} isValid - 유효성 검사 결과
 * @param {string} userProperty - 입력과 비교할 user 객체의 속성
 * @returns {boolean} - 입력이 유효하고 속성과 일치하면 true, 그렇지 않으면 false 반환
 */
const checkInput = (inputElement, isValid, userProperty) => {
  if (!isValid) {
    inputElement.classList.add('is--invalid');
    return false;
  } else {
    if (inputElement.value !== user[userProperty]) {
      const wrong = userProperty == 'id' ? '아이디' : '비밀번호';
      alert(`${wrong}를 다시 입력해주세요.`);
      return false;
    }
    inputElement.classList.remove('is--invalid');
    return true;
  }
};

// 이메일 입력의 유효성 확인 함수
const checkEmail = () => {
  const userEmailInput = document.querySelector('.user-email-input');
  return checkInput(userEmailInput, emailReg(userEmailInput.value), 'id');
};

// 비밀번호 입력의 유효성 확인 함수
const checkPw = () => {
  const userPwInput = document.querySelector('.user-password-input');
  return checkInput(userPwInput, pwReg(userPwInput.value), 'pw');
};

// 로그인 버튼에 대한 이벤트 리스너
document.querySelector('.btn-login').addEventListener('click', (e) => {
  e.preventDefault();
  if (checkEmail() && checkPw()) {
    window.location.href = './welcome.html';
  } else {
    return false;
  }
});
