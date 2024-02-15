let test = `hi`
let bigTest = `I love cryptography!`
let balls = ` `

let cipher = {
    "-": `AA`,
    "!": `AB`,
    ",": `AC`,
    a: 1,
    b: 2,
    c: 4,
    d: 8,
    e: 16,
    f: 32,
    g: 64,
    h: 128,
    i: 256,
    j: 512,
    k: 1024,
    l: 2048,
    m: 4096,
    n: 8192,
    o: 16384,
    p: 32768,
    q: 65538,
    r: 131072,
    s: 262144,
    t: 524288,
    u: 1048576,
    v: 2097152,
    w: 4194304,
    y: 16777216,
    z: 33554432
}

function encrypt(str) {
    let encryptedWord = []
    let strLow = str.toLowerCase()
    let finalStr = strLow.split(` `).join(`-`)
    for (let i = 0; i < finalStr.length; i++) {
        encryptedWord.push(cipher[finalStr[i]])
        encryptedWord.push(`~`)
    }
    return encryptedWord.join(``)
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function decrypt(code) {
    codeArr = code.split(`~`)
    decryptedWord = []
    for (let i = 0; i < codeArr.length - 1; i++) {
        if (isNaN(+codeArr[i])) {
            decryptedWord.push(getKeyByValue(cipher, codeArr[i]))

        } else {
            decryptedWord.push(getKeyByValue(cipher, +codeArr[i]))
        }
    }
    return decryptedWord.join(``).split(`-`).join(` `)
}

let coded = encrypt(test)
let longCode = encrypt(bigTest)
console.log(longCode)
console.log(decrypt(longCode))