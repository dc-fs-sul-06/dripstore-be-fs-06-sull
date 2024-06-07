import { getUserAddresses, createAddress } from "@/libs/controllers/addresses";


export default async function handler(req, res) {
  const method = req.method;
  const userId = req.query.id;
  if (method === "GET") {
    const address = await getUserAddresses(userId);
    return res.status(200).json({ data: address });
  }
  if (method === "POST") {
    const addressBody = req.body;
    const address = await createAddress(userId, addressBody);
    return res.status(200).json({ data: address });
  }
}
