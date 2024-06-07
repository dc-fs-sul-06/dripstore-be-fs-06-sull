import { createCart, getCarts } from "@/libs/controllers/carts";

export default async function Handler(req, res){
  const method = req.method;
  if(method === "GET"){
    const carts = await getCarts()
    return res.status(200).json({data:carts})
  }
  if(method === "POST"){
    const cartBody = req.body;
    const cart = await createCart(cartBody);
    return res.status(200).json({data: cart})
  }
}