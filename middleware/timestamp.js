module.exports = (req, res, next)=>{
  req.time = Date.now();
  next();
};