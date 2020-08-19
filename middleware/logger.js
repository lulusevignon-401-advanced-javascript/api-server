module.exports = (req, res, next) =>{
  console.log('REQUEST', req.path, req.method, req.time);
  next();
};