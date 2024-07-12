import { expect, test, describe, afterEach, beforeEach } from "vitest";

import UserHandler from "../../../../pages/api/admin/users";
import { createMocks } from "node-mocks-http";
import { PrismaClient } from "@prisma/client";

describe('User like endpoints', () => {

  describe('User endpoint', async () => {

    afterEach(async () => {
      const prisma = new PrismaClient();
      const deleteUsers = prisma.user.deleteMany()

      await prisma.$transaction([
        deleteUsers,
      ])

      await prisma.$disconnect()
    })


    test('should create an user when method is POST and body is valid', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {
          cpf: "67622364053",
          name: "Xiquim",
          password: "dosnzois",
          email: "xiquim@dosanzois.com",
          address: {
            street: "R A",
            number: 1234
          }
        }
      });
      
      await UserHandler(req, res);
      console.log(res._getJSONData())
      expect(res._getStatusCode()).toBe(200);
    })

    test('should return 200 and create an user even if address is not present', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {
          cpf: "67622364053",
          name: "Xiquim",
          password: "dosnzois",
          email: "xiquim@dosanzois.com"
        }
      });

      await UserHandler(req, res);

      expect(res._getStatusCode()).toBe(200);
    });

    
  test("Deve dar erro caso tenha CPFs iguais", async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        cpf: "67622364053",
        name: "Xiquim",
        password: "dosnzois",
        email: "xiquim@dosanzois.com"
      }
    })
    await UserHandler(req, res);
    
    expect(res._getStatusCode()).toBe(200);

    const { req: req2, res: res2 } = createMocks({
      method: 'POST',
      body: {
        cpf: "67622364053",
        name: "Xiquim",
        password: "dosnzois",
        email: "xiquim@dosanzois.com"
      }
    })
  
    await UserHandler(req2, res2);
    expect(res2._getStatusCode()).toBe(400);
  })
  test("Deve dar erro caso tenha CPF inválido", async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        cpf: "123",
        name: "Xiquim",
        password: "dosnzois",
        email: "xiquim@dosanzois.com"
      }
    })
    await UserHandler(req, res);
    
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().message).toEqual('CPF not valid');

  })

  test("Deve dar erro caso tenha Emails iguais", async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        cpf: "67622364053",
        name: "Xiquim",
        password: "dosnzois",
        email: "xiquim@dosanzois.com"
      }
    })
    await UserHandler(req, res);
    
    expect(res._getStatusCode()).toBe(200);

    const { req: req2, res: res2 } = createMocks({
      method: 'POST',
      body: {
        cpf: "24715037050",
        name: "Xiquim",
        password: "dosnzois",
        email: "xiquim@dosanzois.com"
      }
    })
  
    await UserHandler(req2, res2);
    expect(res2._getStatusCode()).toBe(400);
  })

  test("Deve dar erro caso tenha um email inválido", async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        cpf: "12345678912",
        name: "Xiquim",
        password: "dosnzois",
        email: "xiquim"
      }
    })
    await UserHandler(req, res);
    
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().message).toEqual('Email not valid');
  })

  });
})