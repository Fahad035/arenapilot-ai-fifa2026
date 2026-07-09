const sanitizeValue = (value) => {
  if (typeof value === "string") {
    return value
      .replace(/[<>]/g, "")
      .replace(/javascript:/gi, "")
      .replace(/<script.*?>.*?<\/script>/gi, "")
      .trim();
  }

  if (Array.isArray(value)) {
    return value.map(sanitizeValue);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, val]) => [
        key,
        sanitizeValue(val),
      ])
    );
  }

  return value;
};

const sanitizeInput = (req, res, next) => {
  if (req.body) {
    req.body = sanitizeValue(req.body);
  }

  next();
};

export default sanitizeInput;