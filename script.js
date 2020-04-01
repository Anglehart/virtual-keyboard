const SHIFT = false;
const CAPSLOCK = false;

function createLetter(keyDownEng, keyUpperEng, keyDownRu, keyUpperRu, keyCode, letterRow) {
  const letter = document.createElement('div');
  document.getElementById(`row${letterRow}`).append(letter);
  letter.className = 'letter';
  letter.innerHTML = keyDownEng;
  letter.keyDownEng = keyDownEng;
  letter.keyUpperEng = keyUpperEng;
  letter.keyDownRu = keyDownRu;
  letter.keyUpperRu = keyUpperRu;
  letter.id = keyCode;
}

function createSpecial(keyEng, keyCode, specialRow) {
  const specialKey = document.createElement('div');
  document.getElementById(`row${specialRow}`).append(specialKey);
  specialKey.className = 'special';
  specialKey.innerHTML = keyEng;
  specialKey.id = keyCode;
}

function createMarkup() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  const textarea = document.createElement('textarea');
  textarea.id = 'textarea';
  textarea.rows = '10';
  textarea.cols = '50';
  const keyboard = document.createElement('div');
  keyboard.id = 'keyboard';
  document.body.append(wrapper);
  document.getElementsByClassName('wrapper')[0].prepend(textarea);
  document.getElementById('textarea').after(keyboard);
}

function createRows() {
  const arrRows = [];
  for (let i = 1; i < 6; i += 1) {
    arrRows[i] = document.createElement('div');
    arrRows[i].id = `row${i}`;
    arrRows[i].className = 'rows';
    document.getElementById('keyboard').append(arrRows[i]);
  }
}

function createKeyboard() {
  createLetter('`', '~', 'ё', 'Ё', 'Backquote', 1);
  createLetter('1', '!', '1', '!', 'Digit1', 1);
  createLetter('2', '@', '2', '"', 'Digit2', 1);
  createLetter('3', '#', '3', '№', 'Digit3', 1);
  createLetter('4', '$', '4', ';', 'Digit4', 1);
  createLetter('5', '%', '5', '%', 'Digit5', 1);
  createLetter('6', '^', '6', ':', 'Digit6', 1);
  createLetter('7', '&', '7', '?', 'Digit7', 1);
  createLetter('8', '*', '8', '*', 'Digit8', 1);
  createLetter('9', '(', '9', '(', 'Digit9', 1);
  createLetter('0', ')', '0', ')', 'Digit0', 1);
  createLetter('-', '_', '-', '_', 'Minus', 1);
  createLetter('=', '+', '=', '+', 'Equal', 1);
  createSpecial('Backspace', 'Backspace', 1);
  createSpecial('Tab', 'Tab', 2);
  createLetter('q', 'Q', 'й', 'Й', 'KeyQ', 2);
  createLetter('w', 'W', 'ц', 'Ц', 'KeyW', 2);
  createLetter('e', 'E', 'у', 'У', 'KeyE', 2);
  createLetter('r', 'R', 'к', 'R', 'KeyR', 2);
  createLetter('t', 'T', 'е', 'Е', 'KeyT', 2);
  createLetter('y', 'Y', 'н', 'Н', 'KeyY', 2);
  createLetter('u', 'U', 'г', 'Г', 'KeyU', 2);
  createLetter('i', 'I', 'ш', 'Ш', 'KeyI', 2);
  createLetter('o', 'O', 'щ', 'Щ', 'KeyO', 2);
  createLetter('p', 'P', 'з', 'З', 'KeyP', 2);
  createLetter('[', '{', 'х', 'Х', 'BracketLeft', 2);
  createLetter(']', '}', 'ъ', 'Ъ', 'BracketRight', 2);
  createLetter('\\', '|', '\\', '/', 'Backslash', 2);
  createSpecial('Caps Lock', 'CapsLock', 3);
  createLetter('a', 'A', 'ф', 'Ф', 'KeyA', 3);
  createLetter('s', 'S', 'ы', 'Ы', 'KeyS', 3);
  createLetter('d', 'D', 'в', 'В', 'KeyD', 3);
  createLetter('f', 'F', 'а', 'А', 'KeyF', 3);
  createLetter('g', 'G', 'п', 'П', 'KeyG', 3);
  createLetter('h', 'H', 'р', 'Р', 'KeyH', 3);
  createLetter('j', 'J', 'о', 'О', 'KeyJ', 3);
  createLetter('k', 'K', 'л', 'Л', 'KeyK', 3);
  createLetter('l', 'L', 'д', 'Д', 'KeyL', 3);
  createLetter(';', ':', 'ж', 'Ж', 'Semicolon', 3);
  createLetter("'", '"', 'э', 'Э', 'Quote', 3);
  createSpecial('Enter', 'Enter', 3);
  createSpecial('Shift', 'ShiftLeft', 4);
  createLetter('z', 'Z', 'я', 'Я', 'KeyZ', 4);
  createLetter('x', 'X', 'ч', 'Ч', 'KeyX', 4);
  createLetter('c', 'C', 'с', 'С', 'KeyC', 4);
  createLetter('v', 'V', 'м', 'М', 'KeyV', 4);
  createLetter('b', 'B', 'и', 'И', 'KeyB', 4);
  createLetter('n', 'N', 'т', 'Т', 'KeyN', 4);
  createLetter('m', 'M', 'ь', 'Ь', 'KeyM', 4);
  createLetter(',', '<', 'б', 'Б', 'Comma', 4);
  createLetter('.', '>', 'ю', 'Ю', 'Period', 4);
  createLetter('/', '?', '.', ',', 'Slash', 4);
  createSpecial('Shift', 'ShiftRight', 4);
  createSpecial('Ctrl', 'ControlLeft', 5);
  createSpecial('Win', 'OSLeft', 5);
  createSpecial('Alt', 'AltLeft', 5);
  createSpecial(' ', 'Space', 5);
  createSpecial('Alt', 'AltRight', 5);
  createSpecial('Del', 'Delete', 5);
  createSpecial('Menu', 'ContextMenu', 5);
  createSpecial('Ctrl', 'ControlRight', 5);
  createSpecial('←', 'ArrowLeft', 5);
  createSpecial('↑', 'ArrowUp', 5);
  createSpecial('→', 'ArrowRight', 5);
  createSpecial('↓', 'ArrowDown', 5);
}

function createListener() {
  document.getElementById('keyboard').querySelectorAll('.letter').forEach((el) => el.addEventListener('click', () => {
    document.getElementById('textarea').value += el.textContent;
  }));
}

function funOnLoad() {
  createMarkup();
  createRows();
  createKeyboard();
  createListener();
}

// Блок для shift
document.addEventListener('keydown', (event) => {
  document.getElementById(event.code).classList.add('active');
});

document.addEventListener('keyup', (event) => {
  document.getElementById(event.code).classList.remove('active');
});

window.onload = funOnLoad;
