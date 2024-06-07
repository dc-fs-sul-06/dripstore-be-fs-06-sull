import { getImagesByProductId } from "@/libs/controllers/images";

export default async function Handler(req, res) {
  const method = req.method;
  const id = req.query.id;

  if (method === "GET") {
    const imageList = await getImagesByProductId(id);
    return res.status(200).json({ data: imageList || [] });
  }
}
