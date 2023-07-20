const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
    { id: 3, name: 'Bob', email: 'bob@example.com' },
  ];

  // Імперативний
function getUserByEmailImperative(users, email) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        return users[i];
      }
    }
    return null;
  }
  
  const userEmailImperative = 'jane@example.com';
  const userImperative = getUserByEmailImperative(users, userEmailImperative);
  console.log(userImperative);

  // Декларативний
// function getUserByEmailDeclarative(users, email) {
//     return users.find(user => user.email === email) || null;
//   }
  
//   const userEmailDeclarative = 'jane@example.com';
//   const userDeclarative = getUserByEmailDeclarative(users, userEmailDeclarative);
//   console.log(userDeclarative);