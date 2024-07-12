import { createUser, getUsers } from "@/libs/controllers/users";
import { fullUserSerializer } from "@/libs/serializers/user";

export default async function handler(req, res) {
  const method = req.method;

  if (method === "POST") {
    const data = req.body;
    const newUser = await createUser(data);

    if (newUser.error) {
      res.status(newUser.error.code).json(newUser.error);
      return;
    }

    res.status(200).json({ data: fullUserSerializer(newUser) });
    return;
  }

  if (method === "GET") {
    const users = await getUsers();
    res.status(200).json({ data: users.map(fullUserSerializer) });
    return;
  }
}
