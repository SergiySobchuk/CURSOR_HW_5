console.log("*************Task_1(convert)***************")
function convert(amount) {
    const curs = 8;
    return curs*amount;
}
console.log(convert(2)); //16
//********************************************
console.log("***********Task_2(reverse)*****************")

function reverse(str) {
    console.log(str);
    let result = '';
    for (let index = str.length-1; index >= 0; index--)
    {
        result = result + str[index];
    }
    return result;
}
console.log(reverse('abc')); // 'cba'
//********************************************
console.log("***********Task_2(reverse->split)*****************")

function reverseSplit(str) {
    console.log(str);
    return str.split('').reverse().join('');
}
console.log(reverseSplit('abc')); // 'cba'
//********************************************
console.log("***********Task_2(reverse->split2)*****************")

const reverse2 = (str) => str.split('').reverse().join('');
console.log(reverse2('abc')); // 'cba'


//********************************************
console.log("***********Task_3(printStairs)*****************")

function printStairs(n) {
    let Stairs = '#';
    for(let index = 0; n > index; index++){
        console.log(Stairs);
        Stairs=Stairs+'#';
    }
}
printStairs(5);
//#
//##
//###

//********************************************
console.log("***********Task_3(printStairs->recursion)*****************")

function printStairsRec(count, t = '#') {
    const print = (n) => {
        if (count > n) {
            console.log(t.repeat(n + 1))
            print(n + 1)
        }
    }
    print(0);
}
printStairsRec(5)

//********************************************
console.log("***********Task_4(sumRange)*****************")

function sumRange(start, end) {
    let sum = 0;
    let point = start;
    for(let index=start; index < end + 1; index++){
        sum += point;
        point++;
    }
    return(sum);
}
console.log(sumRange(2, 4)); // 9
console.log(sumRange(-1, 3)); // 5

//********************************************
console.log("***********Task_5(min)*****************")
function min(a, b, c) {
    let res = 0;
    if (a<b && a<c) {
        res = a
    }else if (b<a && b<c){
        res = b;
    }else if (c<a && c<b){
        res = c;
    }
    return console.log(res);
}
min(10, 5, 11); // 5
min(3, 8, 4); // 3

//********************************************
console.log("***********Task_5(min)->Math.min*****************")

function minMath(a, b, c) {
    return Math.min(a, b, c);
}
console.log(minMath(10, 5, 11)); // 5
console.log(minMath(3, 8, 4)); // 3


//********************************************
console.log("***********Task_5(min)->apply*****************")

const minAp = (arg) => Math.min.apply(null, arg);

console.log(minAp([10, 5, 11])); // 5
console.log(minAp([3, 8, 4])); // 3

//********************************************
console.log("***********Task_6(printPyramid)*****************")

function printPyramid(n) {
    let Stairs = '#';
    let speceTab = ' ';
    for (let spaceCount = n-1; spaceCount>1; spaceCount-- )
    {
        speceTab=speceTab + ' ';
    }
    for(let index = 0; n > index; index++){
        console.log(speceTab.substr(0, speceTab.length - index) + Stairs);
        Stairs=Stairs+'##';
    }
 }
printPyramid(8);
//  #
// ###
//#####

//********************************************
console.log("***********Task_7(firstAndLastToUpper)*****************")

function firstAndLastToUpper(str) {
    let firstLetter= str[0].toUpperCase();
    let lastLetter= str[str.length-1].toUpperCase();
    let midleLeter = str.substr(1,str.length-2);
    let res = firstLetter + midleLeter + lastLetter;
    return res;
}
console.log(firstAndLastToUpper('abc')) // 'AbC'

//********************************************
console.log("***********Task_8(cursorCheck)*****************")

function cursorCheck(str) {
    str = str.toLowerCase();
    if (str.includes("ironman") || str.includes("cursor") || str.includes("ostap")){
        console.log("true");
    } else console.log("false");
}

cursorCheck('Hello I am OstaP') // true
cursorCheck('Superman is here') // false

//********************************************
console.log("***********Task_8(cursorCheck->boolean)*****************")

const cursorCheckB = (str) => (str.toLowerCase().includes("ironman") || str.toLowerCase().includes("cursor") || str.toLowerCase().includes("ostap"));

console.log(cursorCheckB('Hello I am OstaP')); // true
console.log(cursorCheckB('Superman is here')); // false

//********************************************
console.log("***********Task_9(toUppercase)*****************")

function toUppercase(str) {
    let newStr = '';
    let uStr = '';
    for(let index = 0; index < str.length; index++){
        uStr = str.charCodeAt(index);
        newStr += String.fromCharCode(uStr-32);
    }
    return newStr;
}
console.log(toUppercase('abc')); // 'ABC'

console.log("***********Task_9(toUppercase->mal.call)*****************")

const toUpperCase = (str3) =>
Array.prototype.map.call(str3, (el, i) => {
    const charCode = el.charCodeAt(0);

const isLowerCaseChar = charCode >= 97 && charCode <= 122;
if(isLowerCaseChar) {
    return String.fromCharCode(charCode - 32);
}
return el;
}).join('');

console.log(toUpperCase('abc'));

//********************************************
console.log("***********Task_10_1(removeDuplicationLetters)*****************")

function removeDuplicationLetters(str) {
    let strF = str;
    for(let i = 0; i < str.length; i++){
        while (strF.indexOf(strF[i],i+1) !== -1){
            let index = strF.indexOf(strF[i],i+1);
            if (strF[i] !==' '){
                strF = strF.substr(0, index) + strF.substr(index + 1, strF.length);
            }
            if (strF.indexOf(strF[i]) !== -1){
                i++;
            }
        }
    }
    return strF;
}
console.log(removeDuplicationLetters('Hello I am Iron Man')); // 'Helo I am rn M'

//********************************************
console.log("***********Task_10_2(removeDuplicationLetters with case-insensitive)*****************")

function removeDuplicationLetters2(str) {
    let strF = str;
    let strFlow = str.toLowerCase();
    for(let i = 0; i < strF.length; i++){
        while (strFlow.indexOf(strFlow[i],i+1) !== -1){
            let index = strFlow.indexOf(strFlow[i],i+1);
            if (strF[i] !==' '){
                strF = strF.substr(0, index) + strF.substr(index + 1, strF.length);
                strFlow = strFlow.substr(0, index) + strFlow.substr(index + 1, strFlow.length);
            }
            if (strFlow.indexOf(strFlow[i],i+1) === -1 || strF[i] ===' '){
                i++
            }
        }
    }
    return strF;
}
console.log(removeDuplicationLetters2('Helllo I am Iron Man')); // 'Helo I am rn '

//********************************************
console.log("***********Task_10_1(removeDuplicationLetters->reduce)*****************")

unique_char = str => str.split('').reduce((s, v)  =>
(!s.toLowerCase().includes(v.toLowerCase()) || v === ' ') ? (s + v) : s
);
console.log(unique_char("Hello I am Iron Man"));

//********************************************
console.log("***********Task_11(fibonacci)*****************")
function fibonacci(n) {
    let res = 1;
    let f = [1, 1];
    if (n === 1) {
        return res;
    } else if (n === 2) {
        return res;
    } else if (n === 3 || n > 3) {
        for(let i = 2; i < n; i++){
            res = (f[i-1]) + (f[i-2]);
            f[i] = (f[i-1]) + (f[i-2]);
        }
        return res;
    }
 }
console.log(fibonacci(3)); // 2
console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13


//*****************************end*******************************









