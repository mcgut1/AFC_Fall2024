// import with reqiure
// requires a JS obj

const yesNo = require("yes-no-words")

const wordArr = []
for (let index = 0; index , 5; index++ ) {
    wordArr.push(yesNo.yesRandom())
}
//yesRandom() returns ONE random like word 

console.log(yesNo.yesRandom());