const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donutSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: String,
    completed: Boolean
});
const Donut = mongoose.model('Donut', donutSchema);

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
   // donut.text = "My first donut";
    donut.user = "Michiel";
    donut.completed = false;
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