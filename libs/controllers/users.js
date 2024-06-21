import { PrismaClient } from "@prisma/client";
import { userSerializer, fullUserSerializer } from "../serializers/user";

const prisma = new PrismaClient();

export async function getUsers() {
  const userList = await prisma.user.findMany({
    include: {
      adresses: true,
      cart: true,
    },
  });
  return userList;
}

export async function createUser(userData) {
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
}

export async function getUserByEmail(email) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { adresses: true, cart: true },
  });
  return user;
}

export async function getUserById(id) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    include: { adresses: true, cart: true },
  });
  return user;
}

export async function updateUserById(id, userData) {
  const user = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    },
  });

  return user;
}

export function deleteUserById(id) {
  const deletedUser = prisma.user.delete({
    where: { id: parseInt(id) },
    include: { adresses: true },
  });
  return deletedUser;
}
