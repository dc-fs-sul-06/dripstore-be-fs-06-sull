import { getAddress, createAddress } from "../../libs/controllers/addresses";

export default async function handler(req, res) {
  const method = req.method;
  if (method === "GET") {
    const address = await getAddress();
    return res.status(200).json({ data: address });
  }
  if (method === "POST") {
    const addressBody = req.body;
    const address = await createAddress(addressBody);
    return res.status(200).json({ data: address });
  }
}
