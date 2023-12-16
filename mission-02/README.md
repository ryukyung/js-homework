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
  const selectedPoster = dataList.find((data) => data.alt === targetImg.alt);

  [...navigation.children].forEach((li) => li.classList.remove('is-active'));
  target.classList.add('is-active');

  setBgColor(selectedPoster);
  setImage(targetImg);
  setNameText(selectedPoster);
  setAudio(selectedPoster);
};
```

- `<li>` 태그의 `is-active` 클래스를 전부 제거하고 `target`에게만 `is-active` 클래스를 추가한다.
- `find` 메서드를 통해서 클릭한 포스터의 `alt` 속성을 가져온다.
- 배경색, 썸네일 이미지와 대체 텍스트, 썸네일 이름을 변경하는 함수와 오디오 재생 함수를 모두 실행한다. <br /><br />

```jsx
// body의 배경 설정
const setBgColor = (poster) => {
  const [colorA, colorB = '#000'] = poster.color;
  const body = document.querySelector('body');
  body.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
};
```

- 포스터의 색상 배열을 가져와서 배경을 변경한다.
- 만약 `colorB`가 없다면 검정색을 디폴트로 넣어준다. <br/><br/>

```jsx
// 썸네일 이미지와 대체 텍스트 설정
const setImage = (poster) => {
  const visualImg = document.querySelector('.visual img');
  visualImg.src = poster.src;
  visualImg.alt = poster.alt;
};
```

- 선택한 포스터의 `src`,`alt` 속성을 썸네일의 `src`, `alt` 속성으로 변경한다. <br /><br />

```jsx
// 썸네일 이름 설정
const setNameText = (poster) => {
  const visualName = document.querySelector('h1');
  visualName.textContent = poster.name;
};
```

- 포스터의 이름을 가져와서 썸네일 이름을 변경한다. <br /><br />

```jsx
// 오디오 재생
const setAudio = (poster) => {
  const audio = new Audio(`./assets/audio/${poster.name.toLowerCase()}.m4a`);
  audio.play();
};
```

- 오디오 객체를 생성하고 지정한 이름에 해당하는 m4a 오디오 파일의 경로를 지정한다.
- 생성한 오디오 객체를 `play` 메서드를 통해 오디오를 재생한다.
