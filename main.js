const number = Number(prompt('참가자 수를 입력하세요'));
const $order = document.querySelector('.order')
const $words = document.querySelector('.words')
const $input = document.querySelector('input')
const $button = document.querySelector('button')
let word = '';
let newWord = '';

const onInput = (event) => {
  newWord = event.target.value;
}

const onClickButton = () => {
  if (!$input.value) { // input에 입력해야만 순서가 넘어감
    alert('단어를 입력하세요.')
    return;
  }
  if (!word || word[word.length - 1] === newWord[0]) {
    // 제시어가 없거나 올바른 단어를 입력하였는지 판단
    word = newWord;
    $words.textContent = word;
    const order = Number($order.textContent);
    if (order + 1 > number) { // 입력 순서 판단
      $order.textContent = 1
      $input.value = '';
      $input.focus();
      return;
    }
    $order.textContent = order + 1
    $input.value = '';
    $input.focus();
    return;
    }
  alert('잘못된 단어를 입력하였습니다.')
}

$input.addEventListener('input', onInput)
$button.addEventListener('click', onClickButton)