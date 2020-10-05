const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const { stdin, stdout } = require('process');
const { getArgs } = require('./parser');
const toCipher = require('./cipher');

const args = getArgs();

const inputStream = args.input ? fs.createReadStream(args.input) : stdin;
const outputStream = args.output ? fs.createWriteStream(args.output, {flags: 'a+' }) : stdout;

pipeline(
  inputStream,
  toCipher(args),
  outputStream,
  (err) => {
    const action = `${args.action[0].toUpperCase()}${args.action.slice(1)}`;
    if (err) {
      if(err.code === 'ENOENT')
      console.error(`${action} failed. No such file ${err.path}`);
    } else {
      console.log(`${action} succeeded.`);
    }
  }
);

