import { deleteUserById, getUserById, updateUserById } from "@/pages/libs/controllers/users";

export default async function handler(req, res) {
  const method = req.method;

  if (method === "GET") {
    const user = await getUserById(req.query.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ data: user });
    return;
  }

  if (method === "PUT") {
    const { name } = req.body;
    const user = await updateUserById(req.query.id, { name });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ data: user });
    return;
  }

  if (method === "DELETE") {
    const user = await deleteUserById(req.query.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(204).send("Usuário excluido");
    return;
  }
}
