module.exports = function(app) {
    var controller = {}
    
    controller.removetrade = function (req, res){
        
        trade.remove(all).exec()
        .then(
            function() {
                res.status(200).end();
            },
            function(erro){
                return console.error(erro);
            });
      
            };
            return controller;
    };
