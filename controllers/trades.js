module.exports = function(app) {
    var controller = {}
    
    controller.removeTransactions = function (req, res){
        var _id = req.params.id;
        transactions.remove({"_id": _id }).exec()
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
