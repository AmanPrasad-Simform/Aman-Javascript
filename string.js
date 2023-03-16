let string = "amanprasad"

// String length
console.log(string.length)

// String slice()
console.log(string.slice(0,4))
console.log(string.slice(-5,-2))

// String substring()
console.log(string.substring(2,4))

// String substr()
console.log(string.substr(2,4))

// String replace()
let text = "Please visit Microsoft microsoft!";
let newText = text.replace(/MICROSOFT/i, "google");
console.log(newText)
//i means case insensitive

// String replaceAll()
let text1 = "Please visit Microsoft microsoft!";
let newText1 = text.replace(/MICROSOFT/i, "google");
console.log(newText1)

// String toUpperCase()
console.log(string.length)

// String toLowerCase()
console.log(string.length)

// String concat()
console.log(string.length)

// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
let a = "Asfg"
console.log(a.charAt(0))
console.log(a.charCodeAt(0))

// String charCodeAt()
// String split()



//--------------String searching----------------------------------
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith() 
let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("P"))
console.log(str.search("where"))
console.log(str.match("where"))
