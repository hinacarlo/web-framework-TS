import { User } from './models/User';

const user = new User({ name: 'Carlo', age: 28 });

user.set({ name: 'Gelo', age: 999 });

console.log(user.get('name'));
console.log(user.get('age'));
