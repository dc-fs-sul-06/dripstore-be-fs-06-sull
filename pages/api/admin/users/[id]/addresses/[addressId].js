  import { deleteAddress, getAddressById, updateAddress } from "@/pages/libs/controllers/addresses";

  export default async function handler(req, res) {
    const method = req.method;
    const addressId = req.query.addressId;

    if (method === "GET") {
      const address = await getAddressById(addressId);

      if (!address) {
        res.status(404).json({ message: "Address not found" });
        return;
      }

      res.status(200).json({ data: address });
      return;
    }

    if (method === "PUT") {
      const { street, number } = req.body;
      const address = await updateAddress(addressId, { street, number });

      if (!address) {
        res.status(404).json({ message: "Address not found" });
        return;
      }

      res.status(200).json({ data: address });
      return;
    }

    if (method === "DELETE") {
      const address = await deleteAddress(addressId);

      if (!address) {
        res.status(404).json({ message: "Address not found" });
        return;
      }

      res.status(204).send("Endereço excluido");
      return;
    }
  }
