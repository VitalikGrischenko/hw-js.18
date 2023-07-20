const users = [
    { id: 1, name: 'John', eyeColor: 'blue' },
    { id: 2, name: 'Jane', eyeColor: 'brown' },
    { id: 3, name: 'Bob', eyeColor: 'green' },
  ];

  // Імперативний
function getUsersByEyeColorImperative(users, eyeColor) {
    const usersWithEyeColor = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].eyeColor === eyeColor) {
        usersWithEyeColor.push(users[i]);
      }
    }
    return usersWithEyeColor;
  }
  
  const blueEyeUsersImperative = getUsersByEyeColorImperative(users, 'blue');
  console.log(blueEyeUsersImperative);


  // Декларативний
function getUsersByEyeColorDeclarative(users, eyeColor) {
    return users.filter(user => user.eyeColor === eyeColor);
  }
  
  const blueEyeUsersDeclarative = getUsersByEyeColorDeclarative(users, 'blue');
  console.log(blueEyeUsersDeclarative);