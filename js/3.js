const users = [
    { id: 1, name: 'John', gender: 'male' },
    { id: 2, name: 'Jane', gender: 'female' },
    { id: 3, name: 'Bob', gender: 'male' },
  ];

  // Імперативний
function getUsersByGenderImperative(users, gender) {
    const usersWithGender = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].gender === gender) {
        usersWithGender.push(users[i].name);
      }
    }
    return usersWithGender;
  }
  
  const maleUsersImperative = getUsersByGenderImperative(users, 'male');
  console.log(maleUsersImperative);


  // Декларативний
function getUsersByGenderDeclarative(users, gender) {
    return users
      .filter(user => user.gender === gender)
      .map(user => user.name);
  }
  
  const maleUsersDeclarative = getUsersByGenderDeclarative(users, 'male');
  console.log(maleUsersDeclarative);