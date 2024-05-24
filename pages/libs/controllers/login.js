import { getUserByEmail } from "@/pages/libs/controllers/users";
import { userSerializer } from "../serializers/user";
import { generateJWTToken } from "../utils/jwt";

export const authenticateUser = async (email, password) => {
  const user = await getUserByEmail(email);

  console.log(user);

  if (!user) {
    return null;
  }

  if (user.password !== password) {
    return null;
  }

  return { token: generateJWTToken(userSerializer(user)) };
};
