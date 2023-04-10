const user1 = {
  firstName: `John`,
  lastName: 'Doe',
  friends: [
    { firstName: `Jane`, lastName: 'Doe' },
    { firstName: `Bob`, lastName: 'Smith' },
    { firstName: `Alice`, lastName: 'Wonderland' },
  ],
  showFriends() {
    this.friends.forEach(person => {
      console.log(`${person.firstName} ${person.lastName}`);
    });
  },
};

const user2 = {
  firstName: `Juan`,
  lastName: 'Hernandez',
  friends: [
    { firstName: `Maria`, lastName: 'Garcia' },
    { firstName: `Carlos`, lastName: 'Rodriguez' },
    { firstName: `Ana`, lastName: 'Lopez' },
  ],
};

user1.showFriends.apply(user1, [user1.firstName, user1.lastName]);
user1.showFriends.apply(user2, [user2.firstName, user2.lastName]);
