# 표준 버전

## HTML
```
- 참가자들 순서를 표시되는 부분
- 제시어가 표시되는 부분
- 단어를 입력하는 부분
- 입력된 단어를 전달하는 부분
```

<br>

---
## JavaScript <br><br>
1. 참가자 수 입력받기<br>

```
prompt() 함수를 사용하여 입력창을 띄우고
받아온 숫자를 이후 <span class="order><span> 부분에 표시
```

<br>

2. 이벤트 추가
- onClickButton 이벤트
  - 입력 순서 판단하기
  - 올바른 단어인지 판단하기

```
- if 함수를 사용하여 제시어가 비어있는지 판단하고 참가자 순서 표기하기
- 현재 입력되어있는 단어의 끝글자와 새로 입력된 단어의 첫글자 대조하기
- 바르게 입력된 단어를 제시어로 교체하고 순서 넘기기
- 입력창 비우고 커서 두기
```
- onInput 이벤트
  - 입력한 단어 받아오기
```
input 태그에 입력된 단어를 저장하여 판단에 활용
```

<br>

4. 틀렸을 때 오류 표시하기
```
- alert() 함수를 이용하여 알림창 띄우기
- 입력창 비우고 커서 두기
```

5. 모든 순서를 넘기고 입력창 비우기 + 포커즈
```
focuse() 메소드를 이용
```

<br>

## Error List

`Uncaught ReferenceError: 변수 is not defined`
```
Uncaught ReferenceError: order is not defined

- 변수값이 정의되지 않았을 때 발생하는 에러
- if 중첩문 안에서 재할당해야하는 order 변수를 상위 블록에 선언해 발생
- 선언문을 잘라내어 중첩문 안에 붙여넣어주니 정상적으로 작동
```

<br>

`Uncaught TypeError: Assignment to constant variable.`
```
- 상수값을 재할당하고자 했을 때 발생하는 에러
- const로 선언한 $input의 밸류를 재할당하여 발생
- $input 뒤에 .value를 붙이니 정상적으로 작동
```

<br><br><br><br><br>

---

# 응용 버전

1. *onClick*시 *Enter*키로 동작하는 기능
```
keyboardEvent.keyCode 함수 사용
```
2. 글자수를 지정하는 기능
3. CSS 기능 추가

<br><br><br>

---
# 완성 사진

![끝말잇기](/word-relay.png)

<br><br><br>

---
# 새로 배운 것

- 배경에 그라데이션 넣기(linear-gradient)

<br><br><br>

---

# 프로젝트 회고

```
기본기에 대한 집착 때문인지 이론 공부에 집중하며 정작 실전 코딩에 대한 자신감은 부족했는데, 책에서 본 미니 프로젝트를 직접 만들고 응용해 내 것으로 만들어보니 이론을 공부 할 때보다 훨씬 즐겁고 자신감이 생기는 느낌이었다.
```
