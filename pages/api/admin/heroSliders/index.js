import { createHeroSlide, getAllHeroSlides } from "@/libs/controllers/heroSlides";

export default async function handle(req, res){
  const method = req.method;

  let verifications = verifyAllowedMethods(req, ['GET', 'POST']);
  
  if (verifications.errors && verifications.errors.length) {
    const primaryError = verifications.errors[0];
    return res.status(primaryError.status).json(primaryError.payload);
  }
  
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