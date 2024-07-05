import jwt from "jsonwebtoken";

export const generateJWTToken = (user) => {
  const payload = user;
  const secret = "secret";
  const options = { expiresIn: "1h" };

  return jwt.sign(payload, secret, options);
};

export const verifyAccessToken = (token, newSecret) => {
  const secret = newSecret || "secret";

  try {
    const decoded = jwt.verify(token, secret);
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}