const minimist = require('minimist');
const path = require('path');
const fs = require('fs');

const getArgs = () => {
  const args = minimist(process.argv.slice(2), {
  number: ['shift'],
  string: ['input', 'output', 'action'],
  '--': false,
  alias: {
    s: 'shift',
    i: 'input',
    o: 'output',
    a: 'action',
  }
});

if(!args.action) {
  process.stderr.write('Action option is required! Please, write --action or -a and define action as encode or decode. ');
  process.exit(1);
}
if(args.action !== 'encode' && args.action !== 'decode') {
  process.stderr.write('Action option may be only <encode> or <decode>.');
  process.exit(1);
}
if(typeof args.shift !== 'number') {
  process.stderr.write('Shift option is required! Please, pass option correctly: write --shift or -s and integer number.');
  process.exit(1);
}
if(!Number.isInteger(args.shift)) {
  process.stderr.write('Shift option is wrong! Please, pass option correctly: write --shift or -s and integer number.');

}
if(args.input) {
  fs.access(path.resolve(args.input), fs.F_OK | fs.R_OK, (err) => {
    if(err){
      process.stderr.write(`${args.input} ${err.code === 'ENOENT' ? 'does not exist' : 'is not readable'}`);
      process.exit(1);
    }
  });
}
if(args.output) {
  fs.access(path.resolve(args.output), fs.F_OK | fs.W_OK, (err) => {
    if(err){
      process.stderr.write(`${args.output} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
      process.exit(1);
    }
  });
}

return args;
}

module.exports = { getArgs };
