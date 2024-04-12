import { createUser, getUsers } from "@/pages/libs/models/users";

export default function handler(req, res) {
  const method = req.method;

  if (method === "POST") {
    const data = req.body;
    const newUser = createUser(data);
    res.status(200).json({ data: newUser });
    return;
  }

  if (method === "GET") {
    res.status(200).json({ data: getUsers() });
    return;
  }
}
