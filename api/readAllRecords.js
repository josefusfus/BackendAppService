/**
 * Created by joseluissaezsanchez on 31/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var api = {

    get : function (req,res,next) {

        if (typeof req.params.length < 0) {

            return next();
        }

        var context = req.azureMobile;
        var usuario = context.user.id;

        var query = {

            sql: "Select * FROM Noticias WHERE userid = " + usuario
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
            res.json(result);
        });

    }
};

api.get.access = 'authenticated';
module.exports = api;