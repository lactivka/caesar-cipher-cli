const through2 = require('through2');
const charEnDown = require('./constants');
const lettersNumber = 26;

const toCipher = (args) => { return through2((data, enc, cb) => {
  const { action } = args;
  const { shift } = args;
  const inputData = data.toString().split(/[\r\n|\n]/)[0];
  const changedData = [];
  for (let i = 0; i < inputData.length; i += 1) {
    if (charEnDown.includes(inputData[i])) {
      const currInd = charEnDown.indexOf(inputData[i]);
      const newInd = ((action === 'encode' && shift > 0) || (action === 'decode' && shift < 0)) ? (currInd + Math.abs(shift)) % lettersNumber : (lettersNumber + currInd - Math.abs(shift)) % lettersNumber;
      changedData.push(charEnDown[newInd]);
    }
    else if (charEnDown.includes(inputData[i].toLowerCase())) {
      const currInd = charEnDown.indexOf(inputData[i].toLowerCase());
      const newInd = ((action === 'encode' && shift > 0) || (action === 'decode' && shift < 0)) ? (currInd + Math.abs(shift)) % lettersNumber : (lettersNumber + currInd - Math.abs(shift)) % lettersNumber;
      changedData.push(charEnDown[newInd].toUpperCase());
    }
    else changedData.push(inputData[i]);
  }
  changedData.push('\n');
  cb(null, changedData.join(''));
})};

module.exports = toCipher;
