import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@posts.com',
    password: bcrypt.hashSync('123qwe'),
    isAdmin: true,
  },
  {
    name: 'Hanru',
    email: 'hanru@posts.com',
    password: bcrypt.hashSync('123qwe'),
  },
  {
    name: 'Tom',
    email: 'tom@posts.com',
    password: bcrypt.hashSync('123qwe'),
  },
  {
    name: 'Jerry',
    email: 'jerry@posts.com',
    password: bcrypt.hashSync('123qwe'),
  },
];

export default users;
