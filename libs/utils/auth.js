import { parseJwt, verifyAccessToken } from "@/libs/utils/jwt";
import { getUserById } from "../controllers/users";

export const authenticateUser = async (token) => {
  const verifiedToken = verifyAccessToken(token);

  if (!verifiedToken.success) {
    return null;
  }

  const encodedUser = verifiedToken.data.token;
  const jwtUser = parseJwt(encodedUser);
  const user = await getUserById(jwtUser.id);
  return user;
};
