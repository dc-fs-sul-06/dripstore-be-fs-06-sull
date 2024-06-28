import { PrismaClient } from "@prisma/client";
import { fetcherGuard } from "../utils/dataHandlers";

const prisma = new PrismaClient();

export const getAllHeroSlides = fetcherGuard(async () => {
  const slides = await prisma.HeroSlide.findMany();
  return slides;
})

export const createHeroSlide = fetcherGuard(async (slide) => {
  const createdSlide = await prisma.HeroSlide.create({
    data: {
      ctaUrl: slide.ctaUrl,
      ctaText: slide.ctaText,
      imageUrl: slide.imageUrl,
      eyebrow: slide.eyebrow,
      title: slide.title,
      subtitle: slide.subtitle,
    },
  });
  return createdSlide;
});

export const updateHeroSlide = fetcherGuard(async (slide, slideId) => {
  const updatedSlide = await prisma.HeroSlide.updade({
    where: { id: slideId },
    data: {
      ctaUrl: slide.ctaUrl,
      ctaText: slide.ctaText,
      imageUrl: slide.imageUrl,
      eyebrow: slide.eyebrow,
      title: slide.title,
      subtitle: slide.subtitle,
    },
  });
  return updatedSlide;
})

export const deleteHeroSlide = fetcherGuard(async (slideId) => {
  const deletedSlide = await prisma.HeroSlide.delete({
    where: { id: slideId },
  });
  return deletedSlide;
})
