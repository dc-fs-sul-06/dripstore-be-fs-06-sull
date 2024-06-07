import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getCarts() {
  const carts = await prisma.cart.findMany({
    include: { user: true, lineItem: true },
  });
  return carts;
}

export async function getCartById(id) {
  const cart = await prisma.cart.findUnique({
    where: { id: parseInt(id), include: { user: true, lineItem: true } },
  });
  return cart;
}

export async function createCart(cartData) {
  const newCart = await prisma.cart.create({
    data: {
      user: {
        connectOrCreate: {
          where: {cpf: cartData.cpf},
        }
      },
      lineItem: {
        create: cartData.lineItem,
      },
    },
    include: {
      lineItem: true
    }
  });
  return newCart;
}

export async function updateCart(id, cartData) {
  const cart = await prisma.cart.update({
    where: { id: parseInt(id) },
    data: {
      lineItem: {
        set: [...cartData.lineItem],
      },
    },
  });
  return cart;
}

export async function deleteCart(id) {
  const cart = await prisma.cart.delete({
    where: { id: parseInt(id) },
  });
  return cart;
}
