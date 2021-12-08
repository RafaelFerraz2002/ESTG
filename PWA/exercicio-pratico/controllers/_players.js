const getPlayers = (req, res) => {
    console.log(res);
    res.send('Hello');
}

const putPlayer = (req, res) => {
    const body = req.body;

        let newBody = {
            ...body,
            address: "fafe"
        };

        res.send(newBody);
}

const postPlayer = (req, res) => {
    res.send({ body: req.body});
}

module.exports = {
    getPlayers,
    putPlayer,
    postPlayer
}