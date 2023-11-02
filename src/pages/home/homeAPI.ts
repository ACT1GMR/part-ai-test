import UserModel from './../../types/user.model';

export async function fetchUsers(): Promise<UserModel[]> {
  return fetch('https://63c2988fe3abfa59bdaf89f6.mockapi.io/users').then(
    (res) => res.json(),
  );
}
