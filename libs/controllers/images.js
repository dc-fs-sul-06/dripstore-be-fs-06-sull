import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getImagesByProductId(id) {
  const imageList = await prisma.productImage.findMany({
    where: { productId: parseInt(id) },
  });
  return imageList;
}

export async function createImage(imageData) {
  const image = await prisma.productImage.create({
    data: {
      url: imageData.url,
      productId: imageData.productId,
    },
  });
  return image;
}

export async function deleteImage(id) {
  const image = await prisma.productImage.delete({
    where: { id: parseInt(id) },
  });
  return image;
}