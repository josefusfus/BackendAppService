/**
 * Created by joseluissaezsanchez on 31/10/16.
 */



var api = {

    get : function (req,res,next) {

        if (typeof req.params.length < 0) {

            return next();
        }

        var context = req.azureMobile;
        var userid = context.user.id;

        var query = {

            sql: "SELECT * FROM Noticias WHERE userid = '" + userid + "'"
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
            res.json(result);
        });

    }
};

//api.get.access = 'anomymous';
module.exports = api;