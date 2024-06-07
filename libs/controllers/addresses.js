import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserAddresses(userId) {
  const addressList = await prisma.address.findMany({
    where: { userId: parseInt(userId) },
  });
  return addressList;
}

export async function getAddressById(id) {
  const address = await prisma.address.findUnique({
    where: { id: parseInt(id) },
  });
  return address;
}

export async function createAddress(userId, addressData) {
  const address = await prisma.address.create({
    data: {
      street: addressData.street,
      number: addressData.number,
      userId: parseInt(userId),
    },
  });
  return address;
}

export async function updateAddress(id, addressData) {
  const addressList = await prisma.address.update({
    where: { id: parseInt(id) },
    data: {
      street: addressData.street,
      number: addressData.number,
    },
  });
  return addressList;
}

export async function deleteAddress(id) {
  const deletedAddress = await prisma.address.delete({
    where: { id: parseInt(id) },
  });
  return deletedAddress;
}