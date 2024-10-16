const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
const newPeople = people.map(person => person.name);
// Risultato: 'Paolo', 'Giulia', 'Marco'
console.log(newPeople);

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  console.log(person.name);
}