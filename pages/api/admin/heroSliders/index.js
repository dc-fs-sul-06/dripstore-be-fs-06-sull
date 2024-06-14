import { createHeroSlide, getAllHeroSlides } from "@/libs/controllers/heroSlides";

export default async function handle(req, res){
  const method = req.method;
  
  if(method === 'GET'){
    const response = await getAllHeroSlides();
    return res.status(200).json({data: response})
  }
  if(method === 'POST'){
    const body = req.body;
    const response = await createHeroSlide(body);
    return res.status(201).json({created: response})
  }
}