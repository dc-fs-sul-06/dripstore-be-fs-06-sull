import {
  deleteHeroSlide,
  updateHeroSlide,
} from "@/libs/controllers/heroSlides";

export default async function handle(req, res) {
  const method = req.method;
  const { id } = req.query;

  let verifications = verifyAllowedMethods(req, ['GET', 'PUT', 'DELETE']);

  if (verifications.errors && verifications.errors.length) {
    const primaryError = verifications.errors[0];
    return res.status(primaryError.status).json(primaryError.payload);
  }

  if (method === "PUT") {
    const body = req.body;
    const response = await updateHeroSlide(body, id);
    return res.status(200).json({ updated: response });
  }
  if (method === "DELETE") {
    try {
      const response = await deleteHeroSlide(id);
      if(!response) {
        return res.status(404).send('Hero Slider não encontrado');
      }
      return res.status(204);
      } catch (err) {
        return res.status(500).send('Ocorreu algum erro inesperado');
    }
  }
}
