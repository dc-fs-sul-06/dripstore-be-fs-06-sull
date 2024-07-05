import { expect, test, describe, vi } from "vitest";
import { verifyAllowedMethods } from "./requestPipes";
import { createMocks } from "node-mocks-http";

describe('Request Pipes', () => {
  describe('verifyAllowedMethods', () => {
    test('should succeed if method is allowed', async () => {
      const { req } = createMocks({ method: 'GET' });
      const pipeResponse = verifyAllowedMethods(req, ['GET']);

      expect(pipeResponse.errors).toBeFalsy();
    });

    test('should fail if method is not allowed', async () => {
      const { req } = createMocks({ method: 'GET' });
      const pipeResponse = verifyAllowedMethods(req, ['POST']);

      expect(pipeResponse.errors).toBeTruthy();
      expect(pipeResponse.errors[0].payload.errors[0]).equal("Method not Allowed");
    });

    test('should allow multiple request methods', async () => {
      const { req: reqGet } = createMocks({ method: 'GET' });
      const { req: reqPost } = createMocks({ method: 'POST' });
      const allowedMethods = ['GET', 'POST'];
      const getPipeResponse = verifyAllowedMethods(reqGet, allowedMethods);
      const postPipeResposne = verifyAllowedMethods(reqPost, allowedMethods);

      expect(getPipeResponse.errors).toBeFalsy();
      expect(postPipeResposne.errors).toBeFalsy();
    });

    test('should not add errors to pipe if methods allowed', () => {
      const prevPipe = { errors: [{ status: 404, payload: { errors: ["Not found"] } }] }
      const { req: reqGet } = createMocks({ method: 'GET' });
      const allowedMethods = ['GET', 'POST'];
      const getPipeResponse = verifyAllowedMethods(reqGet, allowedMethods, prevPipe);

      expect(getPipeResponse.errors[0].payload.errors[0]).equal("Not found");
      expect(getPipeResponse.errors.some((error) => {
        return error.payload.errors[0] === "Method not Allowed"
      })).toBeFalsy();
      
    })
    
    test('should add errors to pipe if methods is not allowed', () => {
      const prevPipe = { errors: [{ status: 404, payload: { errors: ["Not found"] } }] }
      const { req: reqGet } = createMocks({ method: 'GET' });
      const allowedMethods = ['POST'];
      const getPipeResponse = verifyAllowedMethods(reqGet, allowedMethods, prevPipe);

      expect(getPipeResponse.errors[0].payload.errors[0]).equal("Not found");
      expect(getPipeResponse.errors.some((error) => {
        return error.payload.errors[0] === "Method not Allowed"
      })).toBeTruthy();

    })
  });
})