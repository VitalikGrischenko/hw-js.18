const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },

  ];


// Імперативний

function getUserNamesImperative(users) {
    const names = [];
    for (let i = 0; i < users.length; i++) {
      names.push(users[i].name);
    }
    return names;
  }
  
  const namesImperative = getUserNamesImperative(users);
  console.log(namesImperative);

// Декларативний 
function getUserNamesDeclarative(users) {
    return users.map(user => user.name);
  }
  
  const namesDeclarative = getUserNamesDeclarative(users);
  console.log(namesDeclarative);