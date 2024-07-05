import { expect, test, describe, vi } from "vitest";
import { userSerializer } from "./user";
describe('User serializers', () => {
  describe('userSerializer', () => {
    test('deve retornar os campos name, email, id', async () => {
      const userTest = userSerializer({name: 'chiquin dos anzois pereira', email: 'chiquin@anzois.com', id: 1, password: 'asdfghjk3456'})
      const keysSorted = JSON.stringify(Object.keys(userTest).sort())
      const expectSorted = JSON.stringify(['id','name','email'].sort());
      expect(keysSorted).equal(expectSorted)
    })
  })
})