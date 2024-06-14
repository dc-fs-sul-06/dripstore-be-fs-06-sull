import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllCollections() {
  const collections = await prisma.collection.findMany({
    include: { products: true },
  });
  return collections;
}

export async function getCollectionById(id) {
  const collection = await prisma.collection.findUnique({
    where: { id: parseInt(id) },
    include: { products: true },
  });
  return collection;
}

export async function createCollection(collectionData) {
  const collection = await prisma.collection.create({
    data: {
      title: collectionData.title,
      products: { create: [] },
    },
  });
  return collection;
}

export async function updateCollection(id, collectionData) {
  const collection = await prisma.collection.update({
    where: { id: parseInt(id) },
    data: {
      title: collectionData.title,
      products: collectionData.products,
    },
  });
  return collection;
}

export async function deleteCollection(id) {
  const collection = await prisma.collection.delete({
    where: { id: parseInt(id) },
  });
  return collection;
}

export async function addProductsToCollection(collectionId, productIds) {
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
}

export async function removeProductsFromCollection(collectionId, productIds) {
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
}

export async function getCollectionProducts(collectionId) {
  const collection = await prisma.collection.findUnique({
    where: { id: parseInt(collectionId) },
    include: { products: true },
  });
  return collection.products;
}
export async function getAllHighllightedCollection() {
  const collections = await prisma.collection.findMany({
    where:{
      isHighLightedCollection: true
    },
    include: { products: true },
  });
  return collections;
}