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

export function getUserById(id) {
  const users = getUsers();
  const user = users.find((user) => user.id === parseInt(id));

  return user;
}

export function updateUserById(id, userData) {
  const users = getUsers();
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return null;
  }

  users[userIndex] = { ...users[userIndex], ...userData };

  return users[userIndex];
}

export function deleteUserById(id) {
  const users = getUsers();
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return null;
  }

  const deletedUser = users.splice(userIndex, 1);

  return deletedUser;
}
