// HTML要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックしたら2秒後に文章が書き変わる
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});