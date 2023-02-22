const {boolean} = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// console.clear();

crearArchivo(argv.b, argv.l, argv.h)
	.then((e) => console.log(e))
	.catch((err) => console.log(err));

// console.log(argv);
