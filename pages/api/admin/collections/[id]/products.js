import {
  addProductsToCollection,
  getCollectionProducts,
} from "@/libs/controllers/collections";

export default async function Handler(req, res) {
  const method = req.method;
  const id = req.query.id;

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
