import { createProduct, getAllProducts } from "@/pages/libs/controllers/products";

export default async function Handler(req, res){
  const method = req.method;
  if(method === 'GET'){
    const products = await getAllProducts();
    if(!products){
      return res.status(404).json({data: "Not found"});
    }
    return res.status(200).json({data: products});
  }
  if(method === 'POST'){
    const product = req.body;
    const newProduct = await createProduct(product)
    if(!newProduct){
      return res.status(404).json({data: "Not found"});
    }
    return res.status(200).json({data: product});
  }
}