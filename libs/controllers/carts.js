import { PrismaClient } from "@prisma/client";
import { fetcherGuard } from "../utils/dataHandlers";

const prisma = new PrismaClient();

export const getCarts = fetcherGuard(async () => {
  const carts = await prisma.cart.findMany({
    include: { user: true, lineItem: true },
  });
  return carts;
});

export const getCartById = fetcherGuard(async (id) => {
  const cart = await prisma.cart.findUnique({
    where: { id: parseInt(id), include: { user: true, lineItem: true } },
  });
  return cart;
});

export const createCart = fetcherGuard(async (cartData) => {
  const newCart = await prisma.cart.create({
    data: {
      user: {
        connectOrCreate: {
          where: { cpf: cartData.cpf },
        },
      },
      lineItem: {
        create: cartData.lineItem,
      },
    },
    include: {
      lineItem: true,
    },
  });
  return newCart;
});

export const updateCart = fetcherGuard(async (id, cartData) => {
  const cart = await prisma.cart.update({
    where: { id: parseInt(id) },
    data: {
      lineItem: {
        set: [...cartData.lineItem],
      },
    },
  });
  return cart;
});

export const deleteCart = fetcherGuard(async (id) => {
  const cart = await prisma.cart.delete({
    where: { id: parseInt(id) },
  });
  return cart;
});
