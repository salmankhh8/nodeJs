const cp= require('child_process');

// cp.exec('start chrome https://www.youtube.com/watch?v=tJOJPealurs')


const output = cp.execSync('node text.js');

// console.log('output ' + output);
console.log('output ' + output);