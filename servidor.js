const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;
const router = express.Router();


router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))

});

app.use(router)

app.listen(port, ()=>{
    console.log('Servidor iniciado com sucesso')
});