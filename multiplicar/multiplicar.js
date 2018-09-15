const fs = require('fs'),
      colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if ( !Number(base) ) {
            reject(`El caracter introducido ${base} no es un numero `)
            return
        }
        if ( !Number(limite) ) {
            reject(`El caracter introducido ${limite} no es un numero `)
            return
        }

        let data = ''
        
        for (let i = 0; i<=limite; i++) {
            data += `${base} * ${i} = ${base*i}`
        
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
          if (err)
            reject(err);
          else
            resolve(`tabla-${base}-al-${limite}.txt`)
          
        });
    })
}

const listarTabla = (base, limite =10) => {

    console.log('=================================='.green);
    console.log(`===========Tabla del ${base}============`.green);
    console.log('=================================='.green);
    for(let i=0; i<=limite; i++){
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}