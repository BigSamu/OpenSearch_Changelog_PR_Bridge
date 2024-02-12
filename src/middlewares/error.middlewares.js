export const errorRequestHandler = (err, req, res, next) => {

  // Set the response status code and message
  const statusCode =  err.status || 500;
  const message = err.message || "Internal Server Error";
  console.error(`Error in request to 'OpenSearch Changelog PR Bridge' service: ${message}`);
  res.status(statusCode).json({
    error: {
      status: statusCode,
      message: message,
    },
  });
  next();
};
