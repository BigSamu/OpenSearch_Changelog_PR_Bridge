export const errorRequestHandler = (err, req, res, next) => {
  // Log internal message for server-side debugging
  console.error(err.internalMessage || err.stack);

  // Set the response status code and message
  const statusCode =  err.status || 500;
  const message = err.publicMessage || err.message || "Internal Server Error";

  res.status(statusCode).json({
    error: {
      status: statusCode,
      message: message,
    },
  });
};
