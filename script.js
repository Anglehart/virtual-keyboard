class CreateLetter {
  constructor(letterKey) {
    this.letterKey = letterKey;
    this.letterClass = 'letter';
  }

  create(row, letterId) {
    const letter = document.createElement('div');
    if (letterId) {
      letter.id = letterId;
    } else {
      letter.id = `letter-${this.letterKey}`;
    }
    document.getElementById(`row${row}`).append(letter);
    letter.className = this.letterClass;
    letter.innerHTML = this.letterKey;
  }
}

function funOnLoad() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const textarea = document.createElement('textarea');
  textarea.id = 'textarea';
  textarea.rows = '10';
  textarea.cols = '50';

  const keyboard = document.createElement('div');
  keyboard.id = 'keyboard';

  const row1 = document.createElement('div');
  row1.id = 'row1';
  row1.className = 'rows';

  const row2 = document.createElement('div');
  row2.id = 'row2';
  row2.className = 'rows';

  const row3 = document.createElement('div');
  row3.id = 'row3';
  row3.className = 'rows';

  const row4 = document.createElement('div');
  row4.id = 'row4';
  row4.className = 'rows';

  const row5 = document.createElement('div');
  row5.id = 'row5';
  row5.className = 'rows';

  document.body.append(wrapper);
  document.getElementsByClassName('wrapper')[0].prepend(textarea);
  document.getElementById('textarea').after(keyboard);
  document.getElementById('keyboard').append(row1);
  document.getElementById('keyboard').append(row2);
  document.getElementById('keyboard').append(row3);
  document.getElementById('keyboard').append(row4);
  document.getElementById('keyboard').append(row5);


  new CreateLetter('q').create(2);
  new CreateLetter('w').create(2);
  new CreateLetter('e').create(2);
  new CreateLetter('r').create(2);
  new CreateLetter('t').create(2);
  new CreateLetter('y').create(2);
  new CreateLetter('u').create(2);
  new CreateLetter('i').create(2);
  new CreateLetter('o').create(2);
  new CreateLetter('p').create(2);
  new CreateLetter('[').create(2, 'brOpen1');
  new CreateLetter(']').create(2, 'brClose1');

  new CreateLetter('a').create(3);
  new CreateLetter('s').create(3);
  new CreateLetter('d').create(3);
  new CreateLetter('f').create(3);
  new CreateLetter('g').create(3);
  new CreateLetter('h').create(3);
  new CreateLetter('j').create(3);
  new CreateLetter('k').create(3);
  new CreateLetter('l').create(3);
  new CreateLetter(';').create(3, 'semicolon');
  new CreateLetter('\'').create(3, 'qoteOne');

  new CreateLetter('z').create(4);
  new CreateLetter('x').create(4);
  new CreateLetter('c').create(4);
  new CreateLetter('v').create(4);
  new CreateLetter('b').create(4);
  new CreateLetter('n').create(4);
  new CreateLetter('m').create(4);
  new CreateLetter(',').create(4, 'comma');
  new CreateLetter('.').create(4, 'dot');
  new CreateLetter('/').create(4, 'slash');
}

window.onload = funOnLoad;
