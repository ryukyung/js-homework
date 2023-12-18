/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector('.nav');
const visual = document.querySelector('.visual img');
const nickName = document.querySelector('.nickName');
const list = document.querySelectorAll('li');

const audio = [
  new AudioPlayer(`./assets/audio/ember.m4a`),
  new AudioPlayer(`./assets/audio/wade.m4a`),
  new AudioPlayer(`./assets/audio/clod.m4a`),
  new AudioPlayer(`./assets/audio/gale.m4a`),
];

function setBgColor({ target: t, colorA, colorB }) {
  if (typeof t === 'string') t = document.querySelector(t);
  if (!colorB) target.style.background = colorA;
  t.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

function setImage(target, data) {
  target.src = `./assets/${data.name.toLowerCase()}.jpeg`;
  target.alt = data.alt;
}

function setName(target, data) {
  target.textContent = data.name;
}

function setAudioPlayer(index) {
  const audio = new AudioPlayer(
    `./assets/audio/${source.name.toLowerCase()}.m4a`
  );
  if (audio[index].isPlaying()) return;
  audio.forEach((sound) => sound.stop());
  audio[index].play();
}

function handleClick(e) {
  const target = e.target;
  const li = target.closest('li');
  if (!li) return;
  const index = li.dataset.index - 1;
  const source = data[index];

  list.forEach((item) => item.classList.remove('is-active'));
  li.classList.add('is-active');

  setBgColor({
    target: 'body',
    colorA: source.color[0],
    colorB: source[1],
  });
  setImage(visual, source);
  setName(nickName, source);
  setAudioPlayer(index);
}

nav.addEventListener('click', handleClick);
