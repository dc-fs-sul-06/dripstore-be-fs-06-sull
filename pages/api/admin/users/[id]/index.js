import { deleteUserById, getUserById, updateUserById } from "@/libs/controllers/users";
import { fullUserSerializer } from "@/libs/serializers/user";

export default async function handler(req, res) {
  const method = req.method;

  if (method === "GET") {
    const user = await getUserById(req.query.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ data: fullUserSerializer(user) });
    return;
  }

  if (method === "PUT") {
    const { name, email, password } = req.body;
    const user = await updateUserById(req.query.id, { name, email, password });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ data: fullUserSerializer(user) });
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
