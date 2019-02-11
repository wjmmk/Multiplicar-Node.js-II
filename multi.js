
const argv = require('yargs')
             .command('listar', 'Genera un Archivo Plano con la tabla de Multiplicar',{
                  base:{
                       demand: true,
                       alias: 'b'
                  },
                  limite:{
                       alias: 'l',
                       default: 10
                  }
             }).help().argv;

const { crearArchivo } = require('./tablas/multiplicar');



let argv2 = process.argv;
console.log(argv2);
console.log(argv);
console.log(argv.base);
console.log('Limite',argv.limit);

// Esta linea me permite separar del array parametro los valores que le corresponden.
//let base = parametro.split('=')[1]; 


crearArchivo(argv.base, argv.limit)
     .then(archivo => console.log(`Archivo creado: ${archivo}`))
     .catch(err => console.log(err));
