import dataList from './data.js';
import AudioPlayer from './audio.js';

const navigation = document.querySelector('nav ul');
let audio;
// target의 type이 문자열인지, DOM 요소인지 확인하는 함수
const isString = (target) =>
  typeof target === 'string' ? document.querySelector(target) : target;

// body의 배경 설정
const setBgColor = (target, [colorA, colorB = '#000']) => {
  target = isString(target);
  target.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
};

// 썸네일 이미지와 대체 텍스트 설정
const setImage = (target, poster) => {
  target = isString(target);
  target.src = `./assets/${poster.name.toLowerCase()}.jpeg`;
  target.alt = poster.alt;
};
// 썸네일 이름 설정
const setNameText = (target, poster) => {
  target = isString(target);
  target.textContent = poster.name;
};

// 오디오 재생
const setAudio = (poster) => {
  if (audio && audio.isPlaying()) audio.stop();
  audio = new AudioPlayer(`./assets/audio/${poster.name.toLowerCase()}.m4a`);
  audio.play();
};

// 포스터 아이템 클릭 시 이벤트 처리
const handlePoster = (target) => {
  const targetImg = target.querySelector('button img');
  const visualImg = document.querySelector('.visual img');
  const selectedPoster = dataList.find((data) => data.alt === targetImg.alt);

  [...navigation.children].forEach((li) => li.classList.remove('is-active'));
  target.classList.add('is-active');

  setBgColor('body', selectedPoster.color);
  setImage(visualImg, selectedPoster);
  setNameText('h1', selectedPoster);
  setAudio(selectedPoster);
};

// 포스터 클릭 이벤트 처리
const handleClick = (e) => {
  const targetItem = e.target.closest('li');
  if (!targetItem) return;
  handlePoster(targetItem);
};

navigation.addEventListener('click', handleClick);
