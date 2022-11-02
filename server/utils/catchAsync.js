module.exports = (fn) => {
  return (req, res, next) => {
    //this line helps to get rid of the catch block
    fn(req, res, next).catch((err) => next(err));
  };
};
