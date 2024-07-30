const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple",
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programing = ["js", "rb", "py", "java", "cpp"]
for (const key in programing) {
// console.log(programing[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of Amarica")
map.set('FR', "France")

for (const key in map) {
    console.log(key)
}













