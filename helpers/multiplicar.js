const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 12) => {
	let salida = '';
	for (let i = 1; i <= hasta; i++) {
		salida += `${base} x ${i} = ${base * i} \n`;
	}

	fs.writeFileSync(`./out/tabla-${base}.txt`, salida);

	if (listar === true) {
		console.log(salida.green);
	}
	return `tabla-${base}.txt creada`;
};

module.exports = {
	crearArchivo,
};
