import { deleteCollection, getCollectionById, updateCollection } from "@/libs/controllers/collections";
import { verifyAllowedMethods } from "@/libs/utils/requestPipes";

export default async function Handler(req, res) {
  const method = req.method;

  let verifications = verifyAllowedMethods(req, ['GET', 'PUT', 'DELETE']);

  if (verifications.errors && verifications.errors.length) {
    const primaryError = verifications.errors[0];
    return res.status(primaryError.status).json(primaryError.payload);
  }

  const id = req.query.id;

  if (method === "GET") {
    const collection = await getCollectionById(id)
    if (!collection) {
      return res.status(404).json({ message: "collection not found" })
    }
    return res.status(200).json({ data: collection })
  }
  if (method === "PUT") {
    const collectionBody = req.body;
    const collection = await updateCollection(id, collectionBody)
    return res.status(200).json({ data: collection })
  }
  if (method === "DELETE") {
    const collection = await deleteCollection(id);
    if (collection.error) {
      return res.status(collection.error.code).json(collection.error);
    }
    return res.status(204).json();
  }
}