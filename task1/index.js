const { getArgs } = require('./parser');
const { pipeline } = require('stream');
const fs = require('fs');
const { stdin, stdout } = require('process');
const toCipher = require('./cipher');

const args = getArgs();
const inputStream = args.input ? fs.createReadStream(args.input) : stdin;
const outputStream = args.output ? fs.createWriteStream(args.output, {flags: 'a+', flags: 'r+' }) : stdout;

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

