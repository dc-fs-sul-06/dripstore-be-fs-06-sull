import { authenticateUser } from "@/pages/libs/controllers/login";
import { generateJWTToken } from "../libs/utils/jwt";

export default async function handler(req, res) {
  const method = req.method;

  if (method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Bad Request" });
    return;
  }

  const authenticatedUser = await authenticateUser(email, password);

  if (!authenticatedUser) {
    res.status(403).json({ message: "Forbidden" });
    return;
  }

  res.status(200).json({ data: generateJWTToken(authenticatedUser) });
}
