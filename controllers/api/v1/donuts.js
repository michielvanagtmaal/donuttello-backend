const getAll = (req, res) => {
    res.send("GET donuts");
}

const create = (req, res) => {
    res.send("POST donuts");
}

const update = (req, res) => {
    res.send("PUT donuts");
}

const remove = (req, res) => {
    res.send("DELETE donuts " + req.params.id);
}

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;