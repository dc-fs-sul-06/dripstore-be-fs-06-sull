import { createUser, getUsers } from "@/pages/libs/controllers/users";
import { fullUserSerializer } from "@/pages/libs/serializers/user";

export default async function handler(req, res) {
  const method = req.method;

  console.log("COOKIES", req.cookies);

  if (method === "POST") {
    const data = req.body;
    const newUser = await createUser(data);
    res.status(200).json({ data: fullUserSerializer(newUser) });
    return;
  }

  if (method === "GET") {
    const users = await getUsers();
    res.status(200).json({ data: users.map(fullUserSerializer) });
    return;
  }
}
