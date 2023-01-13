import { User } from './models/User';

const user = new User({ name: 'Carlo', age: 28 });
user.on('click', () => console.log('click1'));
user.on('change', () => console.log('change2'));
user.on('click', () => console.log('click2'));

user.trigger('click');
