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
    let arr = [];
    for ( let i = 0; i < expr.length; i += 10 ){
        let str = expr.slice(i, i+10);
        let s = '';
        for ( let j = 0; j<= 10; j += 2) {
            let ch = str.slice(j,j+2);
            arr[i/10]='';
            switch (ch) {
            case '00' : 
                break;
            case '10' : 
                s = s + '.';
                break;
            case '11' : 
                s = s + '-';
                break;    
            case '**' :
                s = s + ' '; 
                break;    
            }
        }
        arr[i/10] = s;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = (MORSE_TABLE[arr[i]] )? MORSE_TABLE[arr[i]] : ' '; 
    }
    let res = arr.join("");
    return res;
}



module.exports = {
    decode
}