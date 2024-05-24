import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllCollections() {
  const collections = await prisma.collection.findMany({include: {products:true}});
  return collections;
}

export async function getCollectionById(id) {
  const collection = await prisma.collection.findUnique({ where: { id: parseInt(id) }, include: {products:true}});
  return collection;
}

export async function createCollection(collectionData) {
  const collection = await prisma.collection.create({
    data: {
      title: collectionData.title,
      products: {create: []}
    },
  });
  return collection;
}

export async function updateCollection(id, collectionData) {
  const collection = await prisma.collection.update({
    where: { id: parseInt(id) },
    data: {
      title: collectionData.title,
      products: collectionData.products
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
