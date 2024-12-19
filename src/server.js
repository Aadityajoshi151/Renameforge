//The entry point of the server
const express = require('express');
const app = express();
require('dotenv').config()


app.get('/', function(req, res) {
    try{
        res.send("Hello RenameForge!")
    }
    catch (error){
        return res.status(500).send('Unable to reach the server');
    }
    
});

const PORT = 8555;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
