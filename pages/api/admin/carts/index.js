import { createCart, getCarts } from "@/libs/controllers/carts";

export default async function Handler(req, res){
  let verifications = verifyAllowedMethods(req, ['GET', 'POST']);
  
  if (verifications.errors && verifications.errors.length) {
    const primaryError = verifications.errors[0];
    return res.status(primaryError.status).json(primaryError.payload);
  }

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