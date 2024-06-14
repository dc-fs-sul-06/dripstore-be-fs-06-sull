-- CreateTable
CREATE TABLE "HeroSlide" (
    "id" SERIAL NOT NULL,
    "ctaUrl" TEXT,
    "ctaText" TEXT,
    "imageUrl" TEXT,
    "eyebrow" TEXT,
    "title" TEXT,
    "subtitle" TEXT,

    CONSTRAINT "HeroSlide_pkey" PRIMARY KEY ("id")
);
