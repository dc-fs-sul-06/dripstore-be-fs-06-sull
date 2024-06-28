import { PrismaClient } from "@prisma/client";
import { userSerializer, fullUserSerializer } from "../serializers/user";
import { fetcherGuard } from "../utils/dataHandlers";

const prisma = new PrismaClient();

export const getUsers = fetcherGuard(async () => {
  const userList = await prisma.user.findMany({
    include: {
      adresses: true,
      cart: true,
    },
  });
  return userList;
});

export const createUser = fetcherGuard(async (userData) => {
  const newUser = await prisma.user.create({
    data: {
      cpf: userData.cpf,
      name: userData.name,
      password: userData.password,
      email: userData.email,
      adresses: {
        create: {
          street: userData.address.street,
          number: userData.address.number,
        },
      },
      cart: { create: {} },
    },
  });

  return newUser;
});
export const getUserByEmail = fetcherGuard(async (email) => {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { adresses: true, cart: true },
  });
  return user;
});

export const getUserById = fetcherGuard(async (id) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    include: { adresses: true, cart: true },
  });
  return user;
});

export const updateUserById = fetcherGuard(async (id, userData) => {
  const user = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    },
  });

  return user;
});

export const deleteUserById = fetcherGuard(async (id) => {
  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id) },
    include: { adresses: true },
  });
  return deletedUser;
});
