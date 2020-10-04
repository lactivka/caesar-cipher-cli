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
console.log(args)
if(!args.action) {
  process.stderr.write('Action option is required! Please, write --action or -a and define action as encode or decode.');
  process.exit();
}
if(args.action !== 'encode' && args.action !== 'decode') {
  process.stderr.write('Action option must be <encode> or <decode>.');
  process.exit();
}
if(typeof args.shift !== 'number') {
  console.log(!args.shift, typeof args.shift)
  process.stderr.write('Shift option is required! Please, pass option correctly: write --shift or -s and non negative integer number.');
  process.exit();
}

return args;
}

module.exports = { getArgs };
