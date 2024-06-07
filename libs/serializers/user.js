export const userSerializer = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
});

export const fullUserSerializer = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  adresses: user.adresses,
  cart: user.cart,
});
