const person = {
  name: 'Chandler Bing',
  balance: 1500,
  addMoney() {
    let bonus = 500;
    this.balance += bonus;
    console.log(`${this.name} до вашого балансу, нараховано: ${bonus}$`);
  },
  showTheBalance() {
    console.log(
      `На рахунку клієнта ${this.name}, занходеться: ${this.balance}$`,
    );
  },
};

let users = [
  { name: `Phoebe Buffay`, balance: 500 },
  { name: `Joey Tribbiani`, balance: 200 },
  { name: `Rachel Green`, balance: 1000 },
  { name: `Ross Geller`, balance: 1100 },
  { name: `Monica Geller`, balance: 900 },
];

users.push(person);
console.log(users);

users.forEach(user => {
  person.addMoney.call(user);
  person.showTheBalance.call(user);
});

// person.addMoney();
// person.showTheBalance();

const filterUsers = users.filter(user => user.balance >= 1200);
console.log(filterUsers);

const usersBalance = users.map(user => user.balance);
console.log(usersBalance);
