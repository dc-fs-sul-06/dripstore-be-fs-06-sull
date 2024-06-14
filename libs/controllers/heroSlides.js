import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllHeroSlides() {
  const slides = await prisma.HeroSlide.findMany();
  return slides;
}

export async function createHeroSlide(slide) {
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
}

export async function updateHeroSlide(slide, slideId) {
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
}

export async function deleteHeroSlide(slideId) {
  const deletedSlide = await prisma.HeroSlide.delete({
    where: { id: slideId },
  });
  return deletedSlide;
}
