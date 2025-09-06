import { hash } from './hash';

export function main() {
  hashExample();
}

function hashExample() {
  let password = 'hi-mom!';
  const hash1 = hash(password);
  console.log(hash1);

  password = 'hi-mom!';
  const hash2 = hash(password);
  const match = hash1 === hash2;

  console.log(match ? '✔️  good password' : '❌  password does not match');
}
