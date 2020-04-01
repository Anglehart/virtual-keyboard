const ISSHIFT = false;
const ISCAPSLOCK = false;
const ENGLISH = true;

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

function createCommand(keyEng, keyCode, commandRow) {
  const commandKey = document.createElement('div');
  document.getElementById(`row${commandRow}`).append(commandKey);
  commandKey.className = 'command';
  commandKey.innerHTML = keyEng;
  commandKey.id = keyCode;
}

function createNumber(keyDownEng, keyUpperEng, keyDownRu, keyUpperRu, keyCode, numberRow) {
  const numberKey = document.createElement('div');
  document.getElementById(`row${numberRow}`).append(numberKey);
  numberKey.className = 'number';
  numberKey.innerHTML = keyDownEng;
  numberKey.keyDownEng = keyDownEng;
  numberKey.keyUpperEng = keyUpperEng;
  numberKey.keyDownRu = keyDownRu;
  numberKey.keyUpperRu = keyUpperRu;
  numberKey.id = keyCode;
}

function createSpecial(keyDownEng, keyUpperEng, keyDownRu, keyUpperRu, keyCode, specialRow) {
  const specialKey = document.createElement('div');
  document.getElementById(`row${specialRow}`).append(specialKey);
  specialKey.className = 'special';
  specialKey.innerHTML = keyDownEng;
  specialKey.keyDownEng = keyDownEng;
  specialKey.keyUpperEng = keyUpperEng;
  specialKey.keyDownRu = keyDownRu;
  specialKey.keyUpperRu = keyUpperRu;
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
  createSpecial('`', '~', 'ё', 'Ё', 'Backquote', 1);
  createNumber('1', '!', '1', '!', 'Digit1', 1);
  createNumber('2', '@', '2', '"', 'Digit2', 1);
  createNumber('3', '#', '3', '№', 'Digit3', 1);
  createNumber('4', '$', '4', ';', 'Digit4', 1);
  createNumber('5', '%', '5', '%', 'Digit5', 1);
  createNumber('6', '^', '6', ':', 'Digit6', 1);
  createNumber('7', '&', '7', '?', 'Digit7', 1);
  createNumber('8', '*', '8', '*', 'Digit8', 1);
  createNumber('9', '(', '9', '(', 'Digit9', 1);
  createNumber('0', ')', '0', ')', 'Digit0', 1);
  createSpecial('-', '_', '-', '_', 'Minus', 1);
  createSpecial('=', '+', '=', '+', 'Equal', 1);
  createCommand('Backspace', 'Backspace', 1);
  createCommand('Tab', 'Tab', 2);
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
  createSpecial('[', '{', 'х', 'Х', 'BracketLeft', 2);
  createSpecial(']', '}', 'ъ', 'Ъ', 'BracketRight', 2);
  createSpecial('\\', '|', '\\', '/', 'Backslash', 2);
  createCommand('Caps Lock', 'CapsLock', 3);
  createLetter('a', 'A', 'ф', 'Ф', 'KeyA', 3);
  createLetter('s', 'S', 'ы', 'Ы', 'KeyS', 3);
  createLetter('d', 'D', 'в', 'В', 'KeyD', 3);
  createLetter('f', 'F', 'а', 'А', 'KeyF', 3);
  createLetter('g', 'G', 'п', 'П', 'KeyG', 3);
  createLetter('h', 'H', 'р', 'Р', 'KeyH', 3);
  createLetter('j', 'J', 'о', 'О', 'KeyJ', 3);
  createLetter('k', 'K', 'л', 'Л', 'KeyK', 3);
  createLetter('l', 'L', 'д', 'Д', 'KeyL', 3);
  createSpecial(';', ':', 'ж', 'Ж', 'Semicolon', 3);
  createSpecial("'", '"', 'э', 'Э', 'Quote', 3);
  createCommand('Enter', 'Enter', 3);
  createCommand('Shift', 'ShiftLeft', 4);
  createLetter('z', 'Z', 'я', 'Я', 'KeyZ', 4);
  createLetter('x', 'X', 'ч', 'Ч', 'KeyX', 4);
  createLetter('c', 'C', 'с', 'С', 'KeyC', 4);
  createLetter('v', 'V', 'м', 'М', 'KeyV', 4);
  createLetter('b', 'B', 'и', 'И', 'KeyB', 4);
  createLetter('n', 'N', 'т', 'Т', 'KeyN', 4);
  createLetter('m', 'M', 'ь', 'Ь', 'KeyM', 4);
  createSpecial(',', '<', 'б', 'Б', 'Comma', 4);
  createSpecial('.', '>', 'ю', 'Ю', 'Period', 4);
  createSpecial('/', '?', '.', ',', 'Slash', 4);
  createCommand('Shift', 'ShiftRight', 4);
  createCommand('Ctrl', 'ControlLeft', 5);
  createCommand('Win', 'OSLeft', 5);
  createCommand('Alt', 'AltLeft', 5);
  createCommand(' ', 'Space', 5);
  createCommand('Alt', 'AltRight', 5);
  createCommand('Del', 'Delete', 5);
  createCommand('Menu', 'ContextMenu', 5);
  createCommand('Ctrl', 'ControlRight', 5);
  createCommand('←', 'ArrowLeft', 5);
  createCommand('↑', 'ArrowUp', 5);
  createCommand('→', 'ArrowRight', 5);
  createCommand('↓', 'ArrowDown', 5);
}

function createListener() {
  document.getElementById('keyboard').querySelectorAll('.letter, .number, .special').forEach((el) => el.addEventListener('click', () => {
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
