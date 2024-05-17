import { createUser, getUsers } from "@/pages/libs/controllers/users";

export default async function handler(req, res) {
  const method = req.method;

  if (method === "POST") {
    const data = req.body;
    const newUser = await createUser(data);
    res.status(200).json({ data: newUser });
    return;
  }

  if (method === "GET") {
    const users = await getUsers();
    res.status(200).json({ data: users });
    return;
  }
}
