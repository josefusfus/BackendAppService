/**
 * Created by joseluissaezsanchez on 30/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table(); //Crea la tabla con el mismo nombre dle fichero que estamos

table.columns = {

    "name" : "string",
    "secondName" : "string"

};


table.dynamicSchema = false; //Hacemos que la tabla ya no se pueda modificar desde la app, la dejamos estatica

/*
* Trigguer para insert
*/




table.insert(function (context) {

    context.item.idUsuario = context.user.id;
    return context.execute();
} );

table.update(function (context) {

    context.item.idUsuario = context.user.id;
    return context.execute();
} );


table.read(function (context) {


    context.query.where({ idUsuario : context.user.id});
    return context.execute()
});


/*
* Permisos de acceso a tabla
 */


table.read.access = 'anonymous';
table.update.access = 'authenticated';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';

module.exports = table;




