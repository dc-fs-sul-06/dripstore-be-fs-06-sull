import {
  deleteHeroSlide,
  updateHeroSlide,
} from "@/libs/controllers/heroSlides";

export default async function handle(req, res) {
  const method = req.method;
  const { id } = req.query;

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
