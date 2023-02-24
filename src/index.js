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
    const encodeArr = expr.match(/.{1,10}/g);
    let morseArr = new Array();
    let decodeMorse = '';

    encodeArr.forEach(val => {
        let valArr;
        val != "**********" ? valArr = val.match(/.{1,2}/g) : valArr = [val];
        for (const iterator of valArr) {
            if (iterator == '10') {
                morseArr.push('.');
            }else if(iterator == '11'){
                morseArr.push('-');
            }else if(iterator == '**********'){
                morseArr.push('space');
            }
        }
        morseArr.push(' ');

    });
    morseArr = morseArr.join('').split(' ');
    for (const i of morseArr) {
        if(Object.hasOwn(MORSE_TABLE, i)){
            decodeMorse = decodeMorse + MORSE_TABLE[i];
        }else if(i == 'space'){
            decodeMorse = decodeMorse + ' ';
        }
        
    }

    return decodeMorse;
}

module.exports = {
    decode
}