// h1タグ内の全てのdiv要素を取得
let divs = document.querySelectorAll('#target > div');

divs.forEach(div => {
  // 各div要素の文字列を取得
  let text = div.innerText;
  // 各文字にspanタグを付与
  let spannedText = text.split('').map(char => `<span>${char}</span>`).join('');
  // 結果を出力
  div.innerHTML = spannedText;
});