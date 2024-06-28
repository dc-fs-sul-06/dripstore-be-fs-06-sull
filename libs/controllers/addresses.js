import { PrismaClient } from "@prisma/client";
import { fetcherGuard } from "../utils/dataHandlers";

const prisma = new PrismaClient();

export const getUserAddresses = fetcherGuard(async (userId) => {
  const addressList = await prisma.address.findMany({
    where: { userId: parseInt(userId) },
  });
  return addressList;
})

export const getAddressById = fetcherGuard(async (id) => {
  const address = await prisma.address.findUnique({
    where: { id: parseInt(id) },
  });
  return address;
})

export const createAddress = fetcherGuard(async (userId, addressData) => {
  const address = await prisma.address.create({
    data: {
      street: addressData.street,
      number: addressData.number,
      userId: parseInt(userId),
    },
  });
  return address;
}
)
export const updateAddress = fetcherGuard(async (id, addressData) => {
  const addressList = await prisma.address.update({
    where: { id: parseInt(id) },
    data: {
      street: addressData.street,
      number: addressData.number,
    },
  });
  return addressList;
})

export const deleteAddress = fetcherGuard(async (id) => {
  const deletedAddress = await prisma.address.delete({
    where: { id: parseInt(id) },
  });
  return deletedAddress;
})