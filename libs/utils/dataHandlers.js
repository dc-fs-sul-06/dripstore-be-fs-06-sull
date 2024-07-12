import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";

export class FetcherValidationError extends Error {
  constructor(message) {
    super(message)
  }
}

export function fetcherGuard(callback) {
  return async (...params) => {
    try {
      return await callback(...params);
    } catch (e) {
      if (e instanceof PrismaClientValidationError || e instanceof PrismaClientKnownRequestError) {
        return {
          error: {
            code: 400,
            meta: e.meta,
            message: e.message
          }
        }
      }
      if (e instanceof FetcherValidationError) {
        return { error: { code: 400, message: e.message } }
      }
      
      return {
        error: {
          code: 500,
          message: "Server Error",
        }
      }
    }
  }
}