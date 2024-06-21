import { PrismaClient } from "@prisma/client";
import { fetcherGuard } from "../utils/dataHandlers";

const prisma = new PrismaClient();

export const getAllCollections = fetcherGuard(async () => {
  const collections = await prisma.collection.findMany({
    include: { products: true },
  });
  return collections;
});

export const getCollectionById = fetcherGuard(async (id) => {
  const collection = await prisma.collection.findUnique({
    where: { id: parseInt(id) },
    include: { products: true },
  });
  return collection;
})

export const createCollection = fetcherGuard(async (collectionData) => {
  const collection = await prisma.collection.create({
    data: {
      title: collectionData.title,
      products: { create: [] },
    },
  });

  return collection;
});

export const updateCollection = fetcherGuard(async (id, collectionData) => {
  const collection = await prisma.collection.update({
    where: { id: parseInt(id) },
    data: {
      title: collectionData.title,
      products: collectionData.products,
    },
  });
  return collection;
});

export const deleteCollection = fetcherGuard(async (id) => {
  const collection = await prisma.collection.delete({
    where: { id: parseInt(id) },
  });
  return collection;
});

export const addProductsToCollection = fetcherGuard(async (collectionId, productIds) => {
  const collection = await prisma.collection.update({
    where: { id: parseInt(collectionId) },
    data: {
      products: {
        connect: productIds.map((id) => {
          return { id: parseInt(id) };
        }),
      },
    },
  });
  return collection;
})

export const removeProductsFromCollection = fetcherGuard(async (collectionId, productIds) => {
  const collection = await prisma.collection.update({
    where: { id: parseInt(collectionId) },
    data: {
      products: {
        disconnect: productIds.map((id) => {
          return { id: parseInt(id) };
        }),
      },
    },
  });
  return collection;
})

export const getCollectionProducts = fetcherGuard(async (collectionId) => {
  const collection = await prisma.collection.findUnique({
    where: { id: parseInt(collectionId) },
    include: { products: true },
  });
  return collection.products;
})
export const getAllHighllightedCollection = fetcherGuard(async () => {
  const collections = await prisma.collection.findMany({
    where:{
      isHighLightedCollection: true
    },
    include: { products: true },
  });
  return collections;
})