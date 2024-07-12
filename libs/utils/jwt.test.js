import { expect, test, describe, vi } from "vitest";
import { generateJWTToken, verifyAccessToken } from "./jwt";
describe('JWT functions', () => {

  describe('Generate jwt', async () => {
    test('should return a token', async () => {
      const token = generateJWTToken({ x: 'y' })
      expect(token).toBeTruthy()
    })
    test('Deve verificar se o token foi gerado pelo servidor ', async () => {
      const token = generateJWTToken({ x: 'y' })
      const verification = verifyAccessToken(token, 'secret')
      expect(verification.success).toBeTruthy()
    })
    
    test('Deve verificar se o token não foi gerado pelo servidor ', async () => {
      const token = generateJWTToken({ x: 'y' })
      const verification = verifyAccessToken(token, 'secret2')
      expect(verification.success).toBeFalsy()
    })

    test('Deve conter o dados passados no payload', async () => {
      const token = generateJWTToken({ x: 'y', a:"b" })
      const verification = verifyAccessToken(token, 'secret')

      expect(verification.data.x === "y").toBeTruthy()
      expect(verification.data.a === "b").toBeTruthy()
    })
  });


})