const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const isServerError = status >= 500;

  console.error(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`, err);

  res.status(status).json({
    success: false,
    message: isServerError
      ? "Something went wrong on our end. Please try again shortly."
      : err.message || "Request could not be processed.",
    ...(process.env.NODE_ENV !== "production" && isServerError
      ? { debug: err.message }
      : {}),
  });
};

export default errorHandler;
