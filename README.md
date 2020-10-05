# caesar-cipher-cli
### Node.js course, task 1.

<p>Hi, everyone! Here you are a Caesar cipher CLI application. It encode and decode latin letters with passed shift.<p>

How to use:

go to your code editor programm and make:<br>
  `$ git clone https://github.com/lactivka/caesar-cipher-cli.git`

change current directory to caesar-cipher-cli:<br>
  `$ cd caesar-cipher-cli`
  
then you need to install all dependencies in the local node_modules folder<br>
  `$ npm install`
  or you can use an aliase <code>npm i<code>
  
now you can enjoy the programm, run it and pass options
  `$ node task1/index.js <options>`
  Options:
   1. -a, --action: an action encode/decode (required)
   2. -s, --shift: a shift (required)
   3. -i, --input: an input file
   4. -o, --output: an output file.

 if you do not pass required options or pass it incorrect values exception will be thrown.
 Action can be only "encode" or "decode".
 Shift must be an integer number. If you pass 0 as shift chipher returns text without changes. If you pass a negative shift, the action turns to opposite. If |shift| > 25, it reduced to base 26 (if --shift=27 cipher shift is 1 and etc).
 Path to file may be absolute or relative.
 If input file option is not passed, input text is reading from console. To encode/decode text you have to type it in console and press "Enter". After operation programm continue waiting for new data. To exit awaiting mode press "Ctrl"+C.
 If output file option not passed, result is shown in console.
 If both input and output file options are not passed for input and output data uses console.
 Encode and decode only latin letters, other symbols and letters do not change.
 
 Application run examples:
 
 >$ node task1/index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
 
 >$ node task1/index.js --action encode --shift 5 --input plain.txt --output encoded.txt
 
 >$ node task1/index.js --action decode --s 0
 
 >$ node task1/index.js -a decode --shift=-15 --output plain.txt
 
 >$ node task1/index.js --action encode --shift 56 --input decoded.txt
 
 Run application, pass options and enjoy the result!
  
