const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const length = 10;
    const pattern = new RegExp(".{1," + length + "}", "ig");
    let arr = expr.match(pattern);
    let newArr = [];
    let finStr = [];
    for (let v of arr) {
      const s00 = "00";
      const replace00 = "";
      const s10 = "10";
      const replace10 = ".";
      const s11 = "11";
      const replace11 = "-";
      const space = "**********";
      const replaceSpace = " ";
      newArr.push(
        v
          .replaceAll(s00, replace00)
          .replaceAll(s10, replace10)
          .replaceAll(s11, replace11)
          .replaceAll(space, replaceSpace)
      );
    }
    //console.log(MORSE_TABLE)
    //console.log(newArr)
    //console.log(MORSE_TABLE[newArr[0]])
    newArr.map((item, index) => {
      if (item in MORSE_TABLE) {
        finStr.push(MORSE_TABLE[item]);
      } else {finStr.push(' ');}
    });
    return finStr.join('')
  }

module.exports = {
    decode
}