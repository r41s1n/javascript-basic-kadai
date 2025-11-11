// 日付の取得
const today = new Date();  
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

// 文字列として出力
console.log(`${year}年${month}月${date}日`);