import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAddress() {
  const addressList = await prisma.address.findMany();
  return addressList;
}

export async function getAddressById(id) {
  const address = await prisma.address.findUnique({
    where: { id: parseInt(id) },
  });
  return address;
}

export async function createAddress(addressData) {
  const address = await prisma.address.create({ data: {
    street: addressData.street,
    number: addressData.number,
    
  } });
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
