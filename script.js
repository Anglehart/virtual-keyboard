function createLetter(keyDownEng, keyUpperEng, keyDownRu, keyUpperRu, letterRow) {
  const letter = document.createElement('div');
  document.getElementById(`row${letterRow}`).append(letter);
  letter.className = 'letter';
  letter.innerHTML = keyDownEng;
  letter.keyDownEng = keyDownEng;
  letter.keyUpperEng = keyUpperEng;
  letter.keyDownRu = keyDownRu;
  letter.keyUpperRu = keyUpperRu;
}

function funOnLoad() {
  // Создание разметки
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  const textarea = document.createElement('textarea');
  textarea.id = 'textarea';
  textarea.rows = '10';
  textarea.cols = '50';
  const keyboard = document.createElement('div');
  keyboard.id = 'keyboard';

  // Добавление разметки
  document.body.append(wrapper);
  document.getElementsByClassName('wrapper')[0].prepend(textarea);
  document.getElementById('textarea').after(keyboard);

  // Создание и добавление строк
  const arrRows = [];
  for (let i = 1; i < 6; i += 1) {
    arrRows[i] = document.createElement('div');
    arrRows[i].id = `row${i}`;
    arrRows[i].className = 'rows';
    document.getElementById('keyboard').append(arrRows[i]);
  }

  createLetter('q', 'Q', 'й', 'Й', 2);
  createLetter('w', 'W', 'ц', 'Ц', 2);
  createLetter('e', 'E', 'у', 'У', 2);
  createLetter('r', 'R', 'к', 'R', 2);
  createLetter('t', 'T', 'е', 'Е', 2);
  createLetter('y', 'Y', 'н', 'Н', 2);
  createLetter('u', 'U', 'г', 'Г', 2);
  createLetter('i', 'I', 'ш', 'Ш', 2);
  createLetter('o', 'O', 'щ', 'Щ', 2);
  createLetter('p', 'P', 'з', 'З', 2);
  createLetter('[', '{', 'х', 'Х', 2);
  createLetter(']', '}', 'ъ', 'Ъ', 2);
  createLetter('a', 'A', 'ф', 'Ф', 3);
  createLetter('s', 'S', 'ы', 'Ы', 3);
  createLetter('d', 'D', 'в', 'В', 3);
  createLetter('f', 'F', 'а', 'А', 3);
  createLetter('g', 'G', 'п', 'П', 3);
  createLetter('h', 'H', 'р', 'Р', 3);
  createLetter('j', 'J', 'о', 'О', 3);
  createLetter('k', 'K', 'л', 'Л', 3);
  createLetter('l', 'L', 'д', 'Д', 3);
  createLetter(';', ':', 'ж', 'Ж', 3);
  createLetter("'", '"', 'э', 'Э', 3);
  createLetter('z', 'Z', 'я', 'Я', 4);
  createLetter('x', 'X', 'ч', 'Ч', 4);
  createLetter('c', 'C', 'с', 'С', 4);
  createLetter('v', 'V', 'м', 'М', 4);
  createLetter('b', 'B', 'и', 'И', 4);
  createLetter('n', 'N', 'т', 'Т', 4);
  createLetter('m', 'M', 'ь', 'Ь', 4);
  createLetter(',', '<', 'б', 'Б', 4);
  createLetter('.', '>', 'ю', 'Ю', 4);
  createLetter('/', '?', '.', ',', 4);

  document.getElementById('keyboard').querySelectorAll('.letter').forEach((el) => el.addEventListener('click', () => {
    document.getElementById('textarea').value += el.textContent;
  }));
}

// Блок для shift
document.addEventListener('keydown', (event) => {
  if (event.key === 'Shift') {
    document.querySelectorAll('.letter').forEach((item) => {
      item.textContent = item.keyUpperEng;
    });
  } else {
    document.getElementById('textarea').value += event.key;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    document.querySelectorAll('.letter').forEach((item) => {
      item.textContent = item.keyDownEng;
    });
  }
});

window.onload = funOnLoad;
