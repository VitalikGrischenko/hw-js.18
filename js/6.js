const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 22 },
  ];


  // Імперативний
function getUsersInAgeRangeImperative(users, min, max) {
    const usersInRange = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].age >= min && users[i].age <= max) {
        usersInRange.push(users[i]);
      }
    }
    return usersInRange;
  }
  
  const minAge = 20;
  const maxAge = 30;
  const usersInRangeImperative = getUsersInAgeRangeImperative(users, minAge, maxAge);
  console.log(usersInRangeImperative);


  // Декларативний
// function getUsersInAgeRangeDeclarative(users, min, max) {
//     return users.filter(user => user.age >= min && user.age <= max);
//   }
  
//   const minAge = 20;
//   const maxAge = 30;
//   const usersInRangeDeclarative = getUsersInAgeRangeDeclarative(users, minAge, maxAge);
//   console.log(usersInRangeDeclarative);