const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {

    const token = req.headers['authorization']

    //console.log(token)

    if (token === '') {
        return res.status(403).send("A token is required for authentication")
    }
    try {
        const decoded = jwt.verify(token, 'EstaEsLaAPP')
        req.decoded = decoded
    } catch (err) {
        return res.status(401).send("Invalid Token")
    }
    return next()
}

module.exports = verifyToken