const express = require ('express')
const path = require('path')

const startServer = (opcions) => {

    const {port , public_path = 'public'} = opcions;

    const app = express();

    // para poder usar middlewares se usa la palabra "use" ( esa palabra proviene de la libriaria express)

    app.use(express.static(public_path))// contenido estatico que ponemos disponible

    app.get("*", (req, res ) => {


        const indexPath = path.join(__dirname + `../../../${public_path}/vista.html`  )
        res.sendFile(indexPath);

    }) 

    app.listen(port, () =>{

        console.log(`EScuchando en el puerto ${port} `);


    }) 

}

module.exports = {


    startServer

}