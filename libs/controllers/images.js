import { PrismaClient } from "@prisma/client";
import { fetcherGuard } from "../utils/dataHandlers";

const prisma = new PrismaClient();

export const getImagesByProductId = fetcherGuard(async (id) => {
  const imageList = await prisma.productImage.findMany({
    where: { productId: parseInt(id) },
  });
  return imageList;
})

export const createImage = fetcherGuard(async (imageData) => {
  const image = await prisma.productImage.create({
    data: {
      url: imageData.url,
      productId: imageData.productId,
    },
  });
  return image;
})

export const deleteImage = fetcherGuard(async (id) => {
  const image = await prisma.productImage.delete({
    where: { id: parseInt(id) },
  });
  return image;
})