const students = [
  { name: `Amber`, age: 28, rating: 7 },
  { name: `John`, age: 30, rating: 4 },
  { name: `Mary`, age: 28, rating: 11 },
];

function greeting(name) {
  console.log(`Hello, my name is ${name}`);
  return `Hello, my name is ${name}`;
}

const greetingArray = students.map(student => {
  return greeting(student.name);
});
console.log(greetingArray);

const filteredStudents = students.filter(student => {
  return student.rating > 5;
});
console.log(filteredStudents);

function addPoints(point) {
  return point + 3;
}

const newRaitin = students.map(student => {
  return addPoints(student.rating);
});
console.log(newRaitin);
