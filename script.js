let language = sessionStorage.getItem('language') || 'ENG';

const mapEN = {
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'Backspace',
  Tab: 'Tab',
  Backslash: '\\',
  CapsLock: 'CapsLock',
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  OSLeft: 'Win',
  AltLeft: 'Alt',
  Space: ' ',
  AltRight: 'Alt',
  Delete: 'Del',
  ContextMenu: 'Menu',
  ControlRight: 'Ctrl',
  ArrowLeft: '◄',
  ArrowRight: '►',
  ArrowUp: '▲',
  ArrowDown: '▼',
  Backquote: '`',
  BracketLeft: '[',
  BracketRight: ']',
  Semicolon: ';',
  Quote: '\'',
  Comma: ',',
  Period: '.',
  Slash: '/',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm'
};
const mapRU = {
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'Backspace',
  Tab: 'Tab',
  Backslash: '\\',
  CapsLock: 'CapsLock',
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  OSLeft: 'Win',
  AltLeft: 'Alt',
  Space: ' ',
  AltRight: 'Alt',
  Delete: 'Del',
  ContextMenu: 'Menu',
  ControlRight: 'Ctrl',
  ArrowLeft: '◄',
  ArrowRight: '►',
  ArrowUp: '▲',
  ArrowDown: '▼',
  Backquote: 'ё',
  BracketLeft: 'х',
  BracketRight: 'ъ',
  Semicolon: 'ж',
  Quote: 'э',
  Comma: 'б',
  Period: 'ю',
  Slash: '.',
  KeyQ: 'й',
  KeyW: 'ц',
  KeyE: 'у',
  KeyR: 'к',
  KeyT: 'е',
  KeyY: 'н',
  KeyU: 'г',
  KeyI: 'ш',
  KeyO: 'щ',
  KeyP: 'з',
  KeyA: 'ф',
  KeyS: 'ы',
  KeyD: 'в',
  KeyF: 'а',
  KeyG: 'п',
  KeyH: 'р',
  KeyJ: 'о',
  KeyK: 'л',
  KeyL: 'д',
  KeyZ: 'я',
  KeyX: 'ч',
  KeyC: 'с',
  KeyV: 'м',
  KeyB: 'и',
  KeyN: 'т',
  KeyM: 'ь'
};

const keyboardLayout = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'Delete','ContextMenu', 'ControlRight', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
];

const textEl = document.getElementById('textarea');

function createBaseMarkup() {
  const textarea = document.createElement('textarea');
  textarea.id = 'textarea';
  textarea.rows = '10';
  textarea.cols = '50';
  textarea.setAttribute('readonly', 'readonly');
  document.body.append(textarea);

  const keyboard = document.createElement('div');
  keyboard.id = 'keyboard';
  document.body.append(keyboard);
}

function label(keyCode, lang, shift) {
  const symbol = lang[keyCode];
  return shift ? upperSymbol(symbol) : symbol;
}

function upperSymbol(symbol) {
  return String.fromCharCode(symbol.charCodeAt(0) - 32);
}

function createSymbol(keyCode) {
  const el = document.createElement('div');
  el.className = 'letter';
  el.id = keyCode;
  el.textContent = label(keyCode, mapEN, true);
  return el;
}


function drawKeyboard(layout) {
  const keyboardEl = document.getElementById('keyboard');
  layout.forEach((row, rowIdx) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.id = `row${rowIdx + 1}`;
    keyboardEl.append(keyboardRow);
    row.forEach(keyCode => {
      const el = createSymbol(keyCode);
      document.getElementById(`row${rowIdx + 1}`).append(el);
    });
  });
}


/*
keyboardEl.addEventListener('click', evt => {
  const symbolEl = evt.target;
  const keyCode = symbolEl.id;
  handleKeyClick(keyCode);
});

let pressed = [];

function addHandler() {
  document.addEventListener('keydown', evt => {
    pressed.push(evt.code);
    handleKeyClick(evt.code);
  });
  document.addEventListener('keyup', () => {
    pressed = [];
  });
}

function handleKeyClick(keyCode) {

}
*/


/*
function checkShiftMouse() {
  document.querySelectorAll('ShiftRight').addEventListener('mousedown', () => {
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
    console.log(event)
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
    document.getElementById(event.code).classList.remove('active');
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShift = false;
      createButtonText();
    }
  });
}
*/
function funOnLoad() {
  createBaseMarkup();
  drawKeyboard(keyboardLayout);
  // addHandler();
}

window.onload = funOnLoad;
