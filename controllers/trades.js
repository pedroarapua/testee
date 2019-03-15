module.exports = function(app) {
    var controller = {}
    
    controller.removeTransactions = function (req, res){
        transactions.remove().exec()
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
