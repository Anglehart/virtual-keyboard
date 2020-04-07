let language = window.sessionStorage.getItem('language') || 'ENG';
let isShift = false;
let isCapsLock = false;
let pressed = [];

const keyboardMap = [
  [['special', '`', '~', 'ё', 'Ё', 'Backquote'],
    ['number', '1', '!', '1', '!', 'Digit1'],
    ['number', '2', '@', '2', '"', 'Digit2'],
    ['number', '3', '#', '3', '№', 'Digit3'],
    ['number', '4', '$', '4', ';', 'Digit4'],
    ['number', '5', '%', '5', '%', 'Digit5'],
    ['number', '6', '^', '6', ':', 'Digit6'],
    ['number', '7', '&', '7', '?', 'Digit7'],
    ['number', '8', '*', '8', '*', 'Digit8'],
    ['number', '9', '(', '9', '(', 'Digit9'],
    ['number', '0', ')', '0', ')', 'Digit0'],
    ['number', '-', '_', '-', '_', 'Minus'],
    ['number', '=', '+', '=', '+', 'Equal'],
    ['command', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']],

  [['command', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['letter', 'q', 'Q', 'й', 'Й', 'KeyQ'],
    ['letter', 'w', 'W', 'ц', 'Ц', 'KeyW'],
    ['letter', 'e', 'E', 'у', 'У', 'KeyE'],
    ['letter', 'r', 'R', 'к', 'R', 'KeyR'],
    ['letter', 't', 'T', 'е', 'Е', 'KeyT'],
    ['letter', 'y', 'Y', 'н', 'Н', 'KeyY'],
    ['letter', 'u', 'U', 'г', 'Г', 'KeyU'],
    ['letter', 'i', 'I', 'ш', 'Ш', 'KeyI'],
    ['letter', 'o', 'O', 'щ', 'Щ', 'KeyO'],
    ['letter', 'p', 'P', 'з', 'З', 'KeyP'],
    ['special', '[', '{', 'х', 'Х', 'BracketLeft'],
    ['special', ']', '}', 'ъ', 'Ъ', 'BracketRight'],
    ['number', '\\', '|', '\\', '/', 'Backslash']],

  [['command', 'Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock', 'CapsLock'],
    ['letter', 'a', 'A', 'ф', 'Ф', 'KeyA'],
    ['letter', 's', 'S', 'ы', 'Ы', 'KeyS'],
    ['letter', 'd', 'D', 'в', 'В', 'KeyD'],
    ['letter', 'f', 'F', 'а', 'А', 'KeyF'],
    ['letter', 'g', 'G', 'п', 'П', 'KeyG'],
    ['letter', 'h', 'H', 'р', 'Р', 'KeyH'],
    ['letter', 'j', 'J', 'о', 'О', 'KeyJ'],
    ['letter', 'k', 'K', 'л', 'Л', 'KeyK'],
    ['letter', 'l', 'L', 'д', 'Д', 'KeyL'],
    ['special', ';', ':', 'ж', 'Ж', 'Semicolon'],
    ['special', "'", '"', 'э', 'Э', 'Quote'],
    ['command', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter']],

  [['command', 'Shift', 'Shift', 'Shift', 'Shift', 'ShiftLeft'],
    ['letter', 'z', 'Z', 'я', 'Я', 'KeyZ'],
    ['letter', 'x', 'X', 'ч', 'Ч', 'KeyX'],
    ['letter', 'c', 'C', 'с', 'С', 'KeyC'],
    ['letter', 'v', 'V', 'м', 'М', 'KeyV'],
    ['letter', 'b', 'B', 'и', 'И', 'KeyB'],
    ['letter', 'n', 'N', 'т', 'Т', 'KeyN'],
    ['letter', 'm', 'M', 'ь', 'Ь', 'KeyM'],
    ['special', ',', '<', 'б', 'Б', 'Comma'],
    ['special', '.', '>', 'ю', 'Ю', 'Period'],
    ['number', '/', '?', '.', ',', 'Slash'],
    ['command', 'Shift', 'Shift', 'Shift', 'Shift', 'ShiftRight']],

  [['command', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ControlLeft'],
    ['command', 'Win', 'Win', 'Win', 'Win', 'OSLeft'],
    ['command', 'Alt', 'Alt', 'Alt', 'Alt', 'AltLeft'],
    ['letter', ' ', ' ', ' ', ' ', 'Space'],
    ['command', 'Alt', 'Alt', 'Alt', 'Alt', 'AltRight'],
    ['command', 'Del', 'Del', 'Del', 'Del', 'Delete'],
    ['command', 'Menu', 'Menu', 'Menu', 'Menu', 'ContextMenu'],
    ['command', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ControlRight'],
    ['letter', '←', '←', '←', '←', 'ArrowLeft'],
    ['letter', '↑', '↑', '↑', '↑', 'ArrowUp'],
    ['letter', '→', '→', '→', '→', 'ArrowRight'],
    ['letter', '↓', '↓', '↓', '↓', 'ArrowDown']],
];

const validKeys = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ShiftRight',
  'ControlLeft',
  'OSLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'Delete',
  'ContextMenu',
  'ControlRight',
  'ArrowLeft',
  'ArrowUp',
  'ArrowRight',
  'ArrowDown'];

const textarea = document.createElement('textarea');
textarea.id = 'textarea';
textarea.rows = '10';
textarea.cols = '50';
document.body.append(textarea);

const keyboard = document.createElement('div');
keyboard.id = 'keyboard';
document.body.append(keyboard);
const message = document.createElement('p');
message.innerHTML = 'Клавиатура разработана для Windows. Смена языка - левый CTRL + левый ALT.';
document.getElementById('keyboard').after(message);

const keyboardEl = document.getElementById('keyboard');
const textEl = document.getElementById('textarea');

function label(item) {
  if (language === 'ENG' && !isShift && !isCapsLock) { return item[1]; }
  if (language === 'ENG' && isShift && !isCapsLock) { return item[2]; }
  if (language === 'ENG' && !isShift && isCapsLock) { return (item[0] === 'letter') ? item[2] : item[1]; }
  if (language === 'ENG' && isShift && isCapsLock) { return (item[0] === 'letter') ? item[1] : item[2]; }

  if (language === 'RU' && !isShift && !isCapsLock) { return item[3]; }
  if (language === 'RU' && isShift && !isCapsLock) { return item[4]; }
  if (language === 'RU' && !isShift && isCapsLock) { return (item[0] === 'letter' || item[0] === 'special') ? item[4] : item[3]; }
  if (language === 'RU' && isShift && isCapsLock) { return (item[0] === 'letter' || item[0] === 'special') ? item[3] : item[4]; }
  return item[1];
}

function createSymbol(item) {
  const el = document.createElement('div');
  el.classList.add(item[0], 'button');
  [,,,,, el.id] = item;
  el.textContent = label(item);
  return el;
}

function drawKeyboard(map) {
  map.forEach((row, rowIdx) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.id = `row${rowIdx + 1}`;
    keyboardEl.append(keyboardRow);
    row.forEach((item) => {
      const el = createSymbol(item);
      document.getElementById(`row${rowIdx + 1}`).append(el);
    });
  });
}

function reDraw(map) {
  keyboardEl.querySelectorAll('.button').forEach((el) => {
    for (let i = 0; i < 5; i += 1) {
      for (let k = 0; k < map[i].length; k += 1) {
        if (el.id === map[i][k][5]) {
          el.textContent = label(map[i][k]);
        }
      }
    }
  });
}

function checkShiftMouse() {
  document.querySelectorAll('#ShiftLeft, #ShiftRight').forEach((item) => {
    item.addEventListener('mousedown', () => {
      isShift = true;
      reDraw(keyboardMap);
      item.classList.add('active');
    });
    item.addEventListener('mouseup', () => {
      isShift = false;
      reDraw(keyboardMap);
      item.classList.remove('active');
    });
  });
}

function getCaretPosition(area) {
  if (area.selectionStart || area.selectionStart === '0') {
    return {
      start: area.selectionStart,
      end: area.selectionEnd,
    };
  }
  return {
    start: 0,
    end: 0,
  };
}

function setCaretPosition(ctrl, start, end) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(start, end);
  }
}

function handleKeyClick(keyCode) {
  if (!document.getElementById(keyCode).classList.contains('command') || keyCode === 'Enter' || keyCode === 'Tab') {
    const stPos = getCaretPosition(textEl).start;
    const endPos = getCaretPosition(textEl).end;
    const str1 = textEl.value.substring(0, stPos);
    const str2 = textEl.value.substring(stPos);
    let add = '';
    if (keyCode === 'Enter') {
      add = '\n';
    } else if (keyCode === 'Tab') {
      add = '\t';
    } else {
      add = document.getElementById(keyCode).textContent;
    }
    textEl.value = str1 + add + str2;
    setCaretPosition(textEl, stPos + 1, endPos + 1);
  } else if (keyCode === 'Backspace') {
    const stPos = getCaretPosition(textEl).start;
    const endPos = getCaretPosition(textEl).end;
    textEl.value = textEl.value.substring(0, stPos - 1) + textEl.value.substring(stPos);
    setCaretPosition(textEl, stPos - 1, endPos - 1);
  } else if (keyCode === 'Delete') {
    const stPos = getCaretPosition(textEl).start;
    const endPos = getCaretPosition(textEl).end;
    textEl.value = textEl.value.substring(0, stPos) + textEl.value.substring(stPos + 1);
    setCaretPosition(textEl, stPos, endPos);
  }
  if (keyCode === 'CapsLock') { isCapsLock = !(isCapsLock); }
  if (isCapsLock) {
    document.getElementById('CapsLock').classList.add('long-active');
  } else {
    document.getElementById('CapsLock').classList.remove('long-active');
  }
  reDraw(keyboardMap);
}

function addKeyboardHandler() {
  document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (!validKeys.includes(evt.code)) { return; }
    document.getElementById(evt.code).classList.add('active');
    pressed.push(evt.code);
    if ((pressed[0] === 'ControlLeft' && pressed[1] === 'AltLeft') || (pressed[1] === 'ControlLeft' && pressed[0] === 'AltLeft')) {
      if (language === 'RU') { language = 'ENG'; } else { language = 'RU'; }
      window.sessionStorage.language = language;
    }
    if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') { isShift = true; }
    handleKeyClick(evt.code);
  });

  document.addEventListener('keyup', (evt) => {
    if (!validKeys.includes(evt.code)) { return; }
    if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') { isShift = false; }
    document.getElementById(evt.code).classList.remove('active');
    pressed = [];
    reDraw(keyboardMap);
  });
}

function addMouseHandler() {
  keyboardEl.querySelectorAll('.button').forEach((el) => {
    el.addEventListener('click', (evt) => {
      handleKeyClick(evt.target.id);
    });
  });
}

drawKeyboard(keyboardMap);
checkShiftMouse();
addKeyboardHandler();
addMouseHandler();
