import { getAddressById, updateAddress } from "@/pages/libs/controllers/addresses";

export default async function handler(req, res) {
  const method = req.method;
  const id = req.query.id;

  if (method === "GET") {
    const address = await getAddressById(id)

    if (!address) {
      res.status(404).json({ message: "Address not found" });
      return;
    }

    res.status(200).json({ data: address });
    return;
  }

  if (method === "PUT") {
    const { street, number } = req.body;
    const address = await updateAddress(id, {street, number})

    if (!address) {
      res.status(404).json({ message: "Address not found" });
      return;
    }

    res.status(200).json({ data: address });
    return;
  }
}
