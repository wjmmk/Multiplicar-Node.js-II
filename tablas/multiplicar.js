
// Programa para crear las tablas de Multiplicar en archivos planos...

const fs = require('fs');


let crearArchivo = (base, limit) => {

    return new Promise ((resove, reject) => {
       
       if( !Number(base) ){
           reject(`El valor obtenido de la variable base:"${base}", no es un numero.`);
           return;
       }

        let data = "";

            for(i=1; i<=limit; i++){
                data += `${base} * ${i} = ${base * i}\n`;
            }

            //const data2= new Uint8Array(Buffer.from('Hello Node.js'));
            fs.writeFile(`tablas/tabla-${base}-al-${limit}.txt`, data, (err) => {
            if (err) reject (err);
            resove(`tabla-${base}-1-${limit}.txt`);
        });

        
    });
}

/*Con estas lineas de codigo se habilita la funcion crearArchivo
  para que sea vista desde otro archivo externo. En este caso la funcion
  sera utilizada por el archivo llamado multi.js
*/
module.exports = {
    crearArchivo
}


