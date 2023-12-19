### 📌 썸네일 클릭 시 메인 이미지, 배경이 바뀔 수 있도록 구현

### 🔍 Preview

https://github.com/ryukyung/js-homework/assets/91606951/9f0247c0-226c-4ffd-bb73-c629904e4665

### 📝 Description

```html
<script type="module" src="./js/data.js" defer></script>
<script type="module" src="./js/main.js" defer></script>
```

```jsx
export default data; // data.js
import dataList from './data.js'; // main.js
```

- 데이터를 따로 파일로 둠으로써 파일의 관심사를 분리하고자 했다.
- 또, 전역 변수로서 사용하지 않기 위해 `export`와 `import`를 사용했다. <br /><br />

```jsx
// target의 type이 문자열인지, DOM 요소인지 확인하는 함수
const isString = (target) =>
  typeof target === 'string' ? document.querySelector(target) : target;
```

- `target`이 문자열이라면 DOM요소로, 그렇지 않다면 `target`을 그대로 리턴한다.

```jsx
const navigation = document.querySelector('nav ul');
// 포스터 클릭 이벤트 처리
const handleClick = (e) => {
  const targetItem = e.target.closest('li');
  if (!targetItem) return;
  handlePoster(targetItem);
};

navigation.addEventListener('click', handleClick);
```

- 네비게이션의 아이템 클릭 시 클릭한 위치 근처에 `<li>` 태그가 존재한다면 `handlePoster()`를 실행하고, 그렇지 않다면 `undefined`를 리턴한다. <br /><br />

```jsx
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
```

- `<li>` 태그의 `is-active` 클래스를 전부 제거하고 `target`에게만 `is-active` 클래스를 추가한다.
- `find` 메서드를 통해서 클릭한 포스터의 `alt` 속성을 가져온다.
- 배경색, 썸네일 이미지와 대체 텍스트, 썸네일 이름을 변경하는 함수와 오디오 재생 함수를 모두 실행한다.
- 수정사항: 매개변수를 유연하게 받을 수 있도록 대상(`target`)을 받을 수 있도록 수정했다.
  <br /><br />

```jsx
// body의 배경 설정
const setBgColor = (target, [colorA, colorB = '#000']) => {
  target = isString(target);
  target.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
};
```

- 포스터의 색상 배열을 가져와서 배경을 변경한다.
- 만약 `colorB`가 없다면 검정색을 디폴트로 넣어준다. <br/><br/>

```jsx
// 썸네일 이미지와 대체 텍스트 설정
const setImage = (target, poster) => {
  target = isString(target);
  target.src = `./assets/${poster.name.toLowerCase()}.jpeg`;
  target.alt = poster.alt;
};
```

- 선택한 포스터의 `src`,`alt` 속성을 썸네일의 `src`, `alt` 속성으로 변경한다. <br /><br />

```jsx
// 썸네일 이름 설정
const setNameText = (target, poster) => {
  target = isString(target);
  target.textContent = poster.name;
};
```

- 포스터의 이름을 가져와서 썸네일 이름을 변경한다. <br /><br />

```jsx
import AudioPlayer from './audio.js';
let audio;

// 오디오 재생
const setAudio = (poster) => {
  if (audio && audio.isPlaying()) audio.stop();
  audio = new AudioPlayer(`./assets/audio/${poster.name.toLowerCase()}.m4a`);
  audio.play();
};
```

- 오디오 객체를 생성하고 지정한 이름에 해당하는 m4a 오디오 파일의 경로를 지정한다.
- 생성한 오디오 객체를 `play` 메서드를 통해 오디오를 재생한다.
- 수정사항: audio.js를 Audio 객체를 사용한 후에 발견하였다. 그래서 AudioPlayer 클래스를 사용하도록 수정했다.

### 📌 feedback

- 변수 이름과 함수 이름들 그리고 코드를 읽는 흐름이 좋습니다. 다만 수업때도 설명드렸듯이 함수는 매개변수를 유연하게 받아야 다른 곳에서도 재사용성이 올라갑니다! 그 부분만 리팩토링을 해보세요
