import { createCollection, getAllCollections } from "@/libs/controllers/collections";

export default async function Handler(req, res){
  const method = req.method;
  if(method === "GET"){
    const collections = await getAllCollections();
    return res.status(200).json({data:collections})
  }
  if(method === "POST"){
    const collectionBody = req.body;
    const collection = await createCollection(collectionBody)
    return res.status(200).json({data:collection})
  }
}