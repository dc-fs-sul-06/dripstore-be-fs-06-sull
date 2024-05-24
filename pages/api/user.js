
import { fullUserSerializer } from "../libs/serializers/user";
import { authenticateUser } from "../libs/utils/auth";

export default async function handler(req, res) {
  // pegar o cookie
  // identificar o usuario
  // ....
  const token = req.headers.authorization;
  const user = await authenticateUser(token);

  res.status(200).json({ data: fullUserSerializer(user) });
}
