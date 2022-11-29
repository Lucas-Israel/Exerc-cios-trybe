const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.header('Authorization');

  const payload = jwt.verify(token, JWT_SECRET);

  if (payload.admin === false) {
    const err = new Error('Restricted access');
    err.statusCode = 401;
    return next(err);
  }

  next();
}