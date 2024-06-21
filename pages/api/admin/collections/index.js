import { createCollection, getAllCollections } from "@/libs/controllers/collections";
import { verifyAllowedMethods, verifyAuthentication } from "@/libs/utils/requestPipes";

export default async function Handler(req, res) {
  const method = req.method;

  let verifications = verifyAllowedMethods(req, ['GET', 'POST']);
  verifications = await verifyAuthentication(req, verifications);

  if (verifications.errors && verifications.errors.length) {
    const primaryError = verifications.errors[0];
    return res.status(primaryError.status).json(primaryError.payload);
  }

  if (method === "GET") {
    const collections = await getAllCollections();
    return res.status(200).json({ data: collections })
  }

  if (method === "POST") {
    const collectionBody = req.body;
    const collection = await createCollection(collectionBody);

    if (collection.error) {
      return res.status(collection.error.code).json(collection.error);
    }

    return res.status(200).json({ data: collection })
  }
}