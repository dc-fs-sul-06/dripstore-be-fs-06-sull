import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers() {
  const userList = await prisma.user.findMany();
  return userList;
}

export async function createUser(userData) {
  const newUser = await prisma.user.create({
    data: {
      cpf: userData.cpf,
      name: userData.name,
    },
  });

  return newUser;
}

export async function getUserById(id) {
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  return user;
}

export async function updateUserById(id, userData) {
  const user = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: userData.name,
    },
  });

  return user;
}

export function deleteUserById(id) {
  const deletedUser = prisma.user.delete({ where: { id: parseInt(id) } });
  return deletedUser;
}
