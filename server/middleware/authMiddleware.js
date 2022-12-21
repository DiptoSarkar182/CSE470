const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    //check json web token exists
    if (token) {
        jwt.verify(token, SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('/login')
            }
            else {
                console.log(decodedToken)
                next()
            }
        })
    }
    else {
        res.redirect('/login')
    }
}



module.exports = { requireAuth, checkUser }