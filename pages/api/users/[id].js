import { deleteUserById, getUserById, updateUserById } from "@/pages/libs/models/users";

export default function handler(req, res) {
  const users = [
    { id: 1, name: "João" },
    { id: 2, name: "Maria" },
    { id: 3, name: "José" },
  ];

  const method = req.method;

  if (method === "GET") {
    const user = getUserById(req.query.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ data: user });
    return;
  }

  if (method === "PUT") {
    const { name } = req.body;
    const user = updateUserById(req.query.id, { name });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ data: user });
    return;
  }

  if (method === "DELETE") {
    const user = deleteUserById(req.query.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(204).send();
    return;
  }
}
