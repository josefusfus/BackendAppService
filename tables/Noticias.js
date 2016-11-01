/**
 * Created by joseluissaezsanchez on 30/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table(); //Crea la tabla con el mismo nombre dle fichero que estamos

table.columns = {

    "userid" : "string",
    "title" : "string",
    "text": "string",
    "imageUUID": "string",
    "latitude": "number",
    "longitude": "number",
    "author": "string",
    "published": "bool",
   

};


//table.dynamicSchema = false; //Hacemos que la tabla ya no se pueda modificar desde la app, la dejamos estatica

/*
* Trigguer para insert
*/




table.insert(function (context) {

    if(context.item.title.length == 0){
        context.item.title = "No title";
    }

    if(context.item.text.length == 0){
        context.item.text = "No description";
    }

    if(context.item.author.length == 0){
        context.item.author = "Anonymous";
    }

    context.item.userid = context.user.id;
    context.item.published = false;
    
    return context.execute();
    
} );

table.update(function (context) {

    context.item.idUsuario = context.user.id;
    return context.execute();
} );



/*
* Permisos de acceso a tabla
 */


table.read.access = 'anonymous';
table.update.access = 'authenticated';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';

module.exports = table;




