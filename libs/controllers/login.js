import { getUserByEmail } from "@/libs/controllers/users";
import { userSerializer } from "../serializers/user";
import { generateJWTToken } from "../utils/jwt";

export const authenticateUser = async (email, password) => {
  const user = await getUserByEmail(email);

  if (!user) {
    return null;
  }

  if (user.password !== password) {
    return null;
  }

  return { token: generateJWTToken(userSerializer(user)) };
};
