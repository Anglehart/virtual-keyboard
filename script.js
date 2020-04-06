let { language } = window.sessionStorage;
if (!(language !== undefined)) { language = 'ENG'; }
let isShift = false;
let isCapsLock = false;

function createLetter(keyDownEng, keyUpperEng, keyDownRu, keyUpperRu, keyCode, letterRow) {
  const letter = document.createElement('div');
  document.getElementById(`row${letterRow}`).append(letter);
  letter.className = 'letter';
  letter.keyDownEng = keyDownEng;
  letter.keyUpperEng = keyUpperEng;
  letter.keyDownRu = keyDownRu;
  letter.keyUpperRu = keyUpperRu;
  letter.id = keyCode;
}

function createCommand(keyEng, keyCode, commandRow, action) {
  const commandKey = document.createElement('div');
  document.getElementById(`row${commandRow}`).append(commandKey);
  commandKey.className = 'command';
  commandKey.innerHTML = keyEng;
  commandKey.id = keyCode;
  commandKey.action = action;
}

function createNumber(keyDownEng, keyUpperEng, keyDownRu, keyUpperRu, keyCode, numberRow) {
  const numberKey = document.createElement('div');
  document.getElementById(`row${numberRow}`).append(numberKey);
  numberKey.className = 'number';
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
  textarea.setAttribute('readonly', 'readonly');
  const keyboard = document.createElement('div');
  keyboard.id = 'keyboard';
  document.body.append(wrapper);
  document.getElementsByClassName('wrapper')[0].prepend(textarea);
  document.getElementById('textarea').after(keyboard);
  const message = document.createElement('p');
  message.innerHTML = 'Клавиатура разработана для Windows. Смена языка - левый CTRL + левый ALT.';
  document.getElementById('keyboard').after(message);
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
  createNumber('-', '_', '-', '_', 'Minus', 1);
  createNumber('=', '+', '=', '+', 'Equal', 1);
  createCommand('Backspace', 'Backspace', 1);
  createCommand('Tab', 'Tab', 2, '\t');
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
  createNumber('\\', '|', '\\', '/', 'Backslash', 2);
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
  createCommand('Enter', 'Enter', 3, '\n');
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
  createNumber('/', '?', '.', ',', 'Slash', 4);
  createCommand('Shift', 'ShiftRight', 4);
  createCommand('Ctrl', 'ControlLeft', 5);
  createCommand('Win', 'OSLeft', 5);
  createCommand('Alt', 'AltLeft', 5);
  createLetter(' ', ' ', ' ', ' ', 'Space', 5);
  createCommand('Alt', 'AltRight', 5);
  createCommand('Del', 'Delete', 5);
  createCommand('Menu', 'ContextMenu', 5);
  createCommand('Ctrl', 'ControlRight', 5);
  createLetter('←', '←', '←', '←', 'ArrowLeft', 5);
  createLetter('↑', '↑', '↑', '↑', 'ArrowUp', 5);
  createLetter('→', '→', '→', '→', 'ArrowRight', 5);
  createLetter('↓', '↓', '↓', '↓', 'ArrowDown', 5);
}

function createButtonText() {
  const KEYBOARD = document.getElementById('keyboard');
  if (language === 'ENG' && !isShift && !isCapsLock) {
    KEYBOARD.querySelectorAll('.letter, .number, .special').forEach((el) => { el.textContent = el.keyDownEng; });
  } else if (language === 'ENG' && !isShift && isCapsLock) {
    KEYBOARD.querySelectorAll('.letter').forEach((el) => { el.textContent = el.keyUpperEng; });
    KEYBOARD.querySelectorAll('.number, .special').forEach((el) => { el.textContent = el.keyDownEng; });
  } else if (language === 'ENG' && isShift && isCapsLock) {
    KEYBOARD.querySelectorAll('.letter').forEach((el) => { el.textContent = el.keyDownEng; });
    KEYBOARD.querySelectorAll('.number, .special').forEach((el) => { el.textContent = el.keyUpperEng; });
  } else if (language === 'ENG' && isShift && !isCapsLock) {
    KEYBOARD.querySelectorAll('.letter, .number, .special').forEach((el) => { el.textContent = el.keyUpperEng; });
  } else if (language === 'RU' && !isShift && !isCapsLock) {
    KEYBOARD.querySelectorAll('.letter, .number, .special').forEach((el) => { el.textContent = el.keyDownRu; });
  } else if (language === 'RU' && !isShift && isCapsLock) {
    KEYBOARD.querySelectorAll('.number').forEach((el) => { el.textContent = el.keyDownRu; });
    KEYBOARD.querySelectorAll('.special, .letter').forEach((el) => { el.textContent = el.keyUpperRu; });
  } else if (language === 'RU' && isShift && isCapsLock) {
    KEYBOARD.querySelectorAll('.letter, .special').forEach((el) => { el.textContent = el.keyDownRu; });
    KEYBOARD.querySelectorAll('.number').forEach((el) => { el.textContent = el.keyUpperRu; });
  } else if (language === 'RU' && isShift && !isCapsLock) {
    KEYBOARD.querySelectorAll('.letter, .number, .special').forEach((el) => { el.textContent = el.keyUpperRu; });
  }
}

function checkShiftMouse() {
  document.getElementById('ShiftLeft').addEventListener('mousedown', () => {
    isShift = true;
    createButtonText();
  });
  document.getElementById('ShiftLeft').addEventListener('mouseup', () => {
    isShift = false;
    createButtonText();
  });
  document.getElementById('ShiftRight').addEventListener('mousedown', () => {
    isShift = true;
    createButtonText();
  });
  document.getElementById('ShiftRight').addEventListener('mouseup', () => {
    isShift = false;
    createButtonText();
  });
}

function checkCapsLock() {
  document.getElementById('CapsLock').addEventListener('click', () => {
    isCapsLock = !(isCapsLock);
    createButtonText();
    if (isCapsLock) {
      document.getElementById('CapsLock').classList.add('long-active');
    } else {
      document.getElementById('CapsLock').classList.remove('long-active');
    }
  });
}

function changeLanguage() {
  let pressed = [];
  document.addEventListener('keydown', (event) => {
    pressed.push(event.code);
    if ((pressed[0] === 'ControlLeft' && pressed[1] === 'AltLeft') || (pressed[1] === 'ControlLeft' && pressed[0] === 'AltLeft')) {
      if (language === 'RU') { language = 'ENG'; } else { language = 'RU'; }
      window.sessionStorage.language = language;
      createButtonText();
    }
  });
  document.addEventListener('keyup', () => {
    pressed = [];
  });
}

function createListenerButtons() {
  document.getElementById('keyboard').querySelectorAll('.letter, .number, .special').forEach((el) => el.addEventListener('click', () => {
    document.getElementById('textarea').value += el.textContent;
  }));
  document.getElementById('keyboard').querySelectorAll('.command').forEach((el) => el.addEventListener('click', () => {
    if (el.action) {
      document.getElementById('textarea').value += el.action;
    } else if (el.id === 'Backspace' || el.id === 'Delete') {
      document.getElementById('textarea').value = document.getElementById('textarea').value.slice(0, -1);
    }
  }));

  document.addEventListener('keydown', (event) => {
    if (event.code === 'F5') {
      return;
    }
    document.getElementById(event.code).classList.add('active');
    if (!document.getElementById(event.code).classList.contains('command')) {
      document.getElementById('textarea').value += document.getElementById(event.code).textContent;
    } else if (event.code === 'Enter') {
      document.getElementById('textarea').value += document.getElementById(event.code).action;
    } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShift = true;
      createButtonText();
    } else if (event.code === 'CapsLock') {
      isCapsLock = !(isCapsLock);
      if (isCapsLock) {
        document.getElementById('CapsLock').classList.add('long-active');
      } else {
        document.getElementById('CapsLock').classList.remove('long-active');
      }
      createButtonText();
    } else if (event.code === 'Backspace' || event.code === 'Delete') {
      document.getElementById('textarea').value = document.getElementById('textarea').value.slice(0, -1);
      createButtonText();
    } else if (event.code === 'Tab') {
      document.getElementById('textarea').value += document.getElementById(event.code).action;
      event.returnValue = false;
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code === 'F5') {
      return;
    }
    document.getElementById(event.code).classList.remove('active');
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShift = false;
      createButtonText();
    }
  });
}

function funOnLoad() {
  createMarkup();
  createRows();
  createKeyboard();
  checkCapsLock();
  checkShiftMouse();
  changeLanguage();
  createListenerButtons();
  createButtonText();
}

window.onload = funOnLoad;
