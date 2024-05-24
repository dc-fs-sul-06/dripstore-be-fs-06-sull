import { deleteCart, getCartById, updateCart } from "@/pages/libs/controllers/carts";

export default async function Handler(req, res){
  const method = req.method;
  const id = req.query.id;

  if(method === "GET"){
    const cart = await getCartById(id);
    return res.status(200).json({data:cart})
  }
  if(method === "PUT"){
    const cartBody = req.body;
    const cart = await updateCart(id, cartBody);
    return res.status(200).json({data: cart})
  }
  if(method === "DELETE"){
    const cart = await deleteCart(id);
    return res.status(200).json({data: cart})
  }
}