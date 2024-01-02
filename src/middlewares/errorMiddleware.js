const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.log(err.message);
  //res.status(statusCode).json({ message: err.message }); //para mostrar contenido detallado

  return;
};

module.exports = errorHandler;
