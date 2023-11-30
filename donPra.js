

const spanText = document.getElementById("spanText")

// console.log(document)
// console.log(typeof(document))
// console.dir(document)
console.log(typeof(spanText))
console.log(spanText)

console.dir(spanText)
//單純插入文字
// spanText.innerText ="<a href='https://www.youtube.com/watch?v=Wwib7sC-AKQ'>hot</a>"

// spanText.innerHTML = "<a href='https://www.youtube.com/watch?v=Wwib7sC-AKQ'>aaaa</a>"

const aText = document.getElementById("aText")

// aText.innerHTML ="<a href='https://www.youtube.com/watch?v=Wwib7sC-AKQ'>cool</a>"

const a = document.getElementsByClassName("a")

// a[0].innerHTML = "<a href='https://www.youtube.com/watch?v=Wwib7sC-AKQ'>ccc</a>"

// let x = 4;

// if(x==5) {
//     a[0].innerHTML = "<a href='https://www.youtube.com/watch?v=Wwib7sC-AKQ' class = 'aaa'>滿足條件</a>"
// }else{
//     a[0].innerHTML = "<h1 class = 'ah1'> 不滿足條件</h1>"
// }

const testIn = document.getElementById("testIn")

console.dir(testIn)
console.log(typeof(testIn.value))
console.log(testIn.value)
let str = testIn.value

//字串轉數字 parseInt
console.log(typeof(parseInt(str)))
console.log(parseInt(str))
//number
console.log(typeof(Number(str)))
console.log(Number(str))

console.log(str.length)

console.log(str[4])

console.log(str.slice(4))

console.log(str.slice(4,16))

console.log(str.indexOf("good"))

let today =testIn.value
console.log(today.toUpperCase());
console.log(today.toLowerCase());

//確認變數字串的開頭字串次否符合條件字串
//變數字串.startWith(條件字串)
console.log(today.startsWith("To"))
//確認變數字串的結尾字串是否符合條件字串
//變數字串.endsWith
console.log(today.endsWith("y"))
//判斷變數字串是否包含條件字串
//變數字串.include(條件字串)
console.log(today.includes("day"))

//將字串切成陣列
//變數字串.split(切成陣列的條件)
console.log("split 裡面放空字串")
console.log(today.split(""))
console.log("split 裡面放空格")
console.log(today.split(" "))
console.log("split 裡面放a")
console.log(today.split("a"))

let ans = "a,xxx;b,yyy;c,eee"
console.log(ans.split(";"))