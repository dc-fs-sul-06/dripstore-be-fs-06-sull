import {
  addProductsToCollection,
  getCollectionProducts,
} from "@/libs/controllers/collections";

export default async function Handler(req, res) {
  const method = req.method;
  const id = req.query.id;

  let verifications = verifyAllowedMethods(req, ['GET', 'POST']);

  if (verifications.errors && verifications.errors.length) {
    const primaryError = verifications.errors[0];
    return res.status(primaryError.status).json(primaryError.payload);
  }

  if (method === "GET") {
    const collectionProducts = await getCollectionProducts(id);
    if (!collectionProducts) {
      return res.status(404).json({ message: "collection not found" });
    }
    return res.status(200).json({ data: collectionProducts });
  }

  if (method === "POST") {
    const collection = await addProductsToCollection(id, req.body.productIds);
    return res.status(200).json({ data: collection });
  }
}
