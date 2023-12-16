import dataList from './data.js';

const navigation = document.querySelector('nav ul');

const setBgColor = (poster) => {
  const colorList = poster.color;
  const body = document.querySelector('body');
  body.style.background = `linear-gradient(to bottom, ${colorList[0]},${colorList[1]})`;
};

const setImage = (poster) => {
  const visualImg = document.querySelector('.visual img');
  visualImg.src = poster.src;
  visualImg.alt = poster.alt;
};

const setNameText = (poster) => {
  const visualName = document.querySelector('h1');
  visualName.textContent = poster.name;
};

const setAudio = (poster) => {
  const audio = new Audio(`./assets/audio/${poster.name.toLowerCase()}.m4a`);
  audio.play();
};

const posterClick = (target) => {
  const targetImg = target.querySelector('button img');
  const selectedPoster = dataList.find((data) => data.alt === targetImg.alt);

  [...navigation.children].forEach((li) => li.classList.remove('is-active'));
  target.classList.add('is-active');

  setBgColor(selectedPoster);
  setImage(targetImg);
  setNameText(selectedPoster);
  setAudio(selectedPoster);
};

const handleClick = (e) => {
  const targetItem = e.target.closest('li');
  if (!targetItem) return;
  posterClick(targetItem);
};

navigation.addEventListener('click', handleClick);
