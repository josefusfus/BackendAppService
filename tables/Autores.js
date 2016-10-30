/**
 * Created by joseluissaezsanchez on 30/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table(); //Crea la tabla con el mismo nombre dle fichero que estamos

table.columns = {

    "name" : "string",
    "secondName" : "string"

};

/*
* Permisos de acceso a tabla
 */


table.read.access = 'anonymous';
table.update.access = 'authenticated';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';

module.exports = table;




