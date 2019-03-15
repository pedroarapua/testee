module.exports = function(app) {
    var controller = {}
    
    controller.removetrades = function (req, res){
        var _id = req.params.id;
        trades.remove({"_id": _id }).exec()
        .then(
            function() {
                res.status(201).end();
            },
            function(erro){
                return console.error(erro);
            });
      
            };
            return controller;
    };
