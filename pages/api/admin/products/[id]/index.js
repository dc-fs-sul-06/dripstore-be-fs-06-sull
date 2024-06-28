import { deleteProduct, getProductById, updateProduct } from "@/libs/controllers/products";

export default async function Handler(req, res) {
  const method = req.method;
  const id = req.query.id;

  let verifications = verifyAllowedMethods(req, ['GET', 'PUT', 'DELETE']);

  if (verifications.errors && verifications.errors.length) {
    const primaryError = verifications.errors[0];
    return res.status(primaryError.status).json(primaryError.payload);
  }

  if (method === "GET") {
    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({ data: "Not found" });
    }
    return res.status(200).json({ data: product });
  }
  if (method === "PUT") {
    const {title, description, price, quantity, collection} = req.body;
    const product = await updateProduct(id, {title, description, price, quantity, collection})
    if(!product){
      return res.status(404).json({"message":"product not found"})
    }
    return res.status(200).json({ data: product });
  }
  if (method === "DELETE") {
    const product = await deleteProduct(id)
    return res.status(200).json({ message: product });
  }
}
