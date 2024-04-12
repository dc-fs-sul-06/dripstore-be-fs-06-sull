export function getUsers() {
  const users = [
    { id: 1, name: "João" },
    { id: 2, name: "Maria" },
    { id: 3, name: "José" },
  ];

  return users;
}

export function createUser(userData) {
  const users = getUsers();
  const newUser = { id: users.length + 1, ...userData };
  users.push(newUser);

  return newUser;
}

export function getUserById(id) {
  const users = getUsers();
  const user = users.find((user) => user.id === parseInt(id));

  return user;
}

export function updateUserById(id, userData) {
  const users = getUsers();
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return null;
  }

  users[userIndex] = { ...users[userIndex], ...userData };

  return users[userIndex];
}

export function deleteUserById(id) {
  const users = getUsers();
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return null;
  }

  const deletedUser = users.splice(userIndex, 1);

  return deletedUser;
}