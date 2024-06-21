import { authenticateUser } from "./auth";

export function verifyAllowedMethods(req, allowedMethods, verifyObject) {
  const newVerifyObject = verifyObject || {};
  const method = req.method;
  if (!allowedMethods.includes(method)) {
    return {
      ...newVerifyObject,
      errors: [
        ...newVerifyObject.errors || [],
        { status: 405, payload: { errors: ["Method not Allowed"] } }
      ]
    };
  }

  return newVerifyObject;
}

export async function verifyAuthentication(req, verifyObject) {
  const newVerifyObject = verifyObject || {};

  const token = req.headers.authorization;
  const user = await authenticateUser(token);

  if (!user) {
    return {
      ...newVerifyObject,
      errors: [
        ...newVerifyObject.errors || [],
        { status: 401, payload: { errors: ["Not authenticated"] } }
      ]
    };
  }
  return newVerifyObject;
}

