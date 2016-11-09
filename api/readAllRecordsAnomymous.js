/**
 * Created by joseluissaezsanchez on 9/11/16.
 */


var api = {

    get : function (req,res,next) {

        if (typeof req.params.length < 0) {

            return next();
        }

        var context = req.azureMobile;


        var query = {

            sql: "SELECT * FROM Noticias"
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
                res.json(result);
            });

    }
};

api.get.access = 'anonymous';
module.exports = api;

