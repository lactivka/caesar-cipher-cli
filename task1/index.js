const { getArgs } = require('./parser');
const { pipeline } = require('stream');
const fs = require('fs');
const { stdin, stdout } = require('process');
const charEnDown = require('./constants');
const toCipher = require('./cipher');


const args = getArgs();

if(!args.input && !args.output) {
  pipeline(
    stdin,
    toCipher(args),
    stdout,
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    }
  )
}
// let dataBuf = '';
// let dataLine = '';
// stdin.on('data', (data) => {
//   dataBuf = data.toString();
//   dataLine = dataBuf.split(/[\r\n|\n]/)[0];
//   console.log('data in', dataLine[dataLine.length - 1]);
// })

// pipeline(
//   stdin.on('data', (data) => {
//     console.log('your data is', data)
//   }),
//   // zlib.createGzip(),

//   (err) => {
//     if (err) {
//       console.error('Pipeline failed.', err);
//     } else {
//       console.log('Pipeline succeeded.');
//     }
//   }
// );

