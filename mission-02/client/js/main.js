import dataList from './data.js';

const navigation = document.querySelector('nav ul');

// body의 배경 설정
const setBgColor = (poster) => {
  const [colorA, colorB = '#000'] = poster.color;
  const body = document.querySelector('body');
  body.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
};

// 썸네일 이미지와 대체 텍스트 설정
const setImage = (poster) => {
  const visualImg = document.querySelector('.visual img');
  visualImg.src = poster.src;
  visualImg.alt = poster.alt;
};

// 썸네일 이름 설정
const setNameText = (poster) => {
  const visualName = document.querySelector('h1');
  visualName.textContent = poster.name;
};

// 오디오 재생
const setAudio = (poster) => {
  const audio = new Audio(`./assets/audio/${poster.name.toLowerCase()}.m4a`);
  audio.play();
};

// 포스터 아이템 클릭 시 이벤트 처리
const handlePoster = (target) => {
  const targetImg = target.querySelector('button img');
  const selectedPoster = dataList.find((data) => data.alt === targetImg.alt);

  [...navigation.children].forEach((li) => li.classList.remove('is-active'));
  target.classList.add('is-active');

  setBgColor(selectedPoster);
  setImage(targetImg);
  setNameText(selectedPoster);
  setAudio(selectedPoster);
};

// 포스터 클릭 이벤트 처리
const handleClick = (e) => {
  const targetItem = e.target.closest('li');
  if (!targetItem) return;
  handlePoster(targetItem);
};

navigation.addEventListener('click', handleClick);
