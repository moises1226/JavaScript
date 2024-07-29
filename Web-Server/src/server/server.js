import express from 'express'

import path from 'path'
// en ES6 no viene x defeto el __dirname (es el q busca la url del arch vista)
//por ellos tenemos q llmar a esras 2 funciones
//despues realizamos a conversion para asi poder usarlo
import { fileURLToPath } from 'url';
import { dirname } from 'path';

    const startServer = (opcions) => {

    const {port , public_path = 'public'} = opcions;

    const app = express();

    // para poder usar middlewares se usa la palabra "use" ( esa palabra proviene de la libriaria express)

    app.use(express.static(public_path))// contenido estatico que ponemos disponible

    app.get("*", (req, res ) => {

        //conversion para que ande el __dirname
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const indexPath = path.join(__dirname + `../../../${public_path}/vista.html` )
        res.sendFile(indexPath);

    }) 

    app.listen(port, () =>{

        console.log(`EScuchando en el puerto ${port} `);


    }) 

}

export {startServer};
