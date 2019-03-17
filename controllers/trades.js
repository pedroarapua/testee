module.exports = function(app) {
    var controller = {}
    
    controller.removetrades = function (req, res){
        
        trades.remove(all).exec()
        .then(
            function() {
                res.status(200).end();               
            },
            function(erro){
                return console.error(err);
            });
      
            };
            return controller;
    };
