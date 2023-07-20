const users = [
    { id: 1, name: 'John', isActive: true },
    { id: 2, name: 'Jane', isActive: false },
    { id: 3, name: 'Bob', isActive: false },
  ];

  // Імперативний
function getInactiveUsersImperative(users) {
    const inactiveUsers = [];
    for (let i = 0; i < users.length; i++) {
      if (!users[i].isActive) {
        inactiveUsers.push(users[i]);
      }
    }
    return inactiveUsers;
  }
  
  const inactiveUsersImperative = getInactiveUsersImperative(users);
  console.log(inactiveUsersImperative);


  // Декларативний
function getInactiveUsersDeclarative(users) {
    return users.filter(user => !user.isActive);
  }
  
  const inactiveUsersDeclarative = getInactiveUsersDeclarative(users);
  console.log(inactiveUsersDeclarative);