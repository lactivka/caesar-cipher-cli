const minimist = require('minimist');

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
  process.exit(1);
}

return args;
}

module.exports = { getArgs };
