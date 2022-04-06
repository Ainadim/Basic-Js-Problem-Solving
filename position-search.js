const sentence = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est tenetur amet placeat illum, in odit Lorem suscipit officia, incidunt repellat similique atque obcaecati mollitia fugit eligendi Lorem vitae quae voluptatum beatae? Lorem'

const loremAll = sentence.match(/lorem/gi);
const loremTime = loremAll ? loremAll.length : 0;

let position = sentence.search(/ipsum/i)
position = position >= 0 ? position : 'not found'

console.log('Here is the position ' + position + ' in the sentence')
console.log(loremAll)
console.log(loremTime)