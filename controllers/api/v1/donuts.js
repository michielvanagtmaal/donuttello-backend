const Donut = require('../../../models/Donut');

const getAll = (req, res) => {

    Donut.find({"user": "Michiel"}, (err, docs) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "donuts": [docs]
                }
            });
        }
    });

    
}

const create = (req, res, next) => {

    

    let donut = new Donut();
    donut.text = req.body.text;
    donut.user = req.body.user;
    donut.completed = req.body.completed;
    donut.save( (err, doc) => {
        if(err) {
            res.json({
                "status": "error",
                "message": "Could not save donut"
            });
        }

        if (!err){
            res.json({
                "status": "success",
                "data": {
                    "donut": doc
                }
            });
        }
    });




    
}

module.exports.getAll = getAll;
module.exports.create = create;