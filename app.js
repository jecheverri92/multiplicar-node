// Requires
const argv = require('./config/yargs').argv,
      colors = require('colors')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
//const fs = require('express'); No nativo 
//const fs = require('./fs'); Nosotros mismos los escribimos


let comando = argv._[0];
switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado:`, `${ archivo}`.green))
            .catch(e => console.log(e)); 
    break

    default:
        console.log('Comando no reconocido')
    
}

console.log(argv);


// let parametro = argv[2];
// let base = parametro.split('=')[1]
 //console.log(base)


// 


