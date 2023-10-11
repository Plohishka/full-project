const express = require('express');
const app = express();
const bodyParser = express.json();
const CatController = require('./controllers/Cat.controller');

// app.METHOD('url', function);

app.use(bodyParser);

/* 

CRUD

-create
-read
    -read one
    -read all
-update
-delete    

*/

app.post('/', CatController.createCat);   /* create */
app.get('/', CatController.getAllCats);   /* read all */
app.get('/:catId', CatController.getOneCat);   /* read one*/
app.put('/:catId', CatController.updateCat);   /* update*/
app.delete('/:catId', CatController.deleteCat)  /* delete */


module.exports = app;