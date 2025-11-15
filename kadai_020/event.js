// HTML要素を取得
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンがクリックされたときの処理
buttonElement.addEventListener('click', () => {
  // h2要素のテキストを書き換える
  textElement.textContent = 'ボタンをクリックしました';
});