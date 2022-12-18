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

const update = (req, res) => {
    let user = req.user._id;
    let donutId = req.params.id;
    Donut.findOneAndUpdate({
        user: user,
        _id: donutId
    }, {
        completed: true
    }, {
        new: true
    }).then(doc => {

        res.json({
            "status": "success",
            "data": {
                "donut": doc
            }
        })
    }).catch(err => {
        res.json(err);
})
}

const deleteDonut = (req, res) => {
    let id = req.params.id;
    Donut.findByIdAndDelete(id, (err, donut => {
        if(err) {
        let result = {
            "status": "error",
            "message": "Could not delete donut"

        }; 
        res.json(result);
    }
    else {
        let result = {
            "status": "success",
            "data": {
                "donut": donut
        },
        };
        res.json(result);

    }
    }));
}


module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;
module.exports.deleteDonut = deleteDonut;