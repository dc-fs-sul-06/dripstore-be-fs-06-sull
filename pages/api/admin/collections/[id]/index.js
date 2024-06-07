import { getCollectionById, updateCollection } from "@/libs/controllers/collections";

export default async function Handler(req, res){
  const method = req.method;
  const id = req.query.id;

  if(method === "GET"){
    const collection = await getCollectionById(id)
    if(!collection){
      return res.status(404).json({message: "collection not found"})
    }
    return res.status(200).json({data: collection})
  }
  if(method === "PUT"){
    const collectionBody = req.body;
    const collection = await updateCollection(id, collectionBody)
    return res.status(200).json({data: collection})  
  }
  if(method === "DELETE"){
    const collection = await deleteCollection(id)
    return res.status(200).json({data: collection})
  }
}