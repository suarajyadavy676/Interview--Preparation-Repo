const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'A token is required for authentication' });
  }
  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    if (err) {
      return res.status(401).send("Error in JWT verification");
    }
    // console.log(decoded);  // Now correctly referencing 'decoded'
    req.user = decoded;    // Assigning decoded data to request object
    next();                // Calling next() only if everything is correct
  });
};

module.exports = verifyToken;
