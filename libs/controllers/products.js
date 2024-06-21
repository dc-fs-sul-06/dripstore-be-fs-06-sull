import { PrismaClient } from "@prisma/client";
import { FetcherValidationError, fetcherGuard } from "../utils/dataHandlers";

const prisma = new PrismaClient();

export async function getAllProducts() {
  const products = await prisma.product.findMany({
    include: { collection: true },
  });
  return products;
}

export async function getProductById(id) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
    include: { collection: true },
  });
  return product;
}

export const createProduct = fetcherGuard(async (productData) => {
  if (productData.collection && !Array.isArray(productData.collection)) {
    throw new FetcherValidationError('invalid collection')
  }
  const collection = productData.collection && Array.isArray(productData.collection) ? productData.collection : []
  const product = await prisma.product.create({
    data: {
      title: productData.title,
      description: productData.description,
      price: productData.price,
      quantity: productData.quantity,
      collection: {
        connectOrCreate: collection.map((collection) => {
          return {
            where: { title: collection.title },
            create: { title: collection.title }
          }
        })
      },
    },
  });
  return product;
})

export async function updateProduct(id, productData) {
  const product = await prisma.product.update({
    where: { id: parseInt(id) },
    data: {
      title: productData.title,
      description: productData.description,
      price: productData.price,
      quantity: productData.quantity,
      collection: { set: productData.collection }

    },
    include: { collection: true }
  });
  return product;
}

export async function deleteProduct(id) {
  const product = await prisma.product.delete({
    where: { id: parseInt(id) },
  });
  return product;
}

