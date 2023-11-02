import UserModel from './../../types/user.model';

export async function fetchUser(id): Promise<UserModel> {
  return fetch(`https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`).then(
    (res) => res.json(),
  );
}

export async function deleteUser(id): Promise<UserModel> {
  return fetch(`https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
}

export async function updateUser(user): Promise<UserModel> {
  return fetch(`https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${user.id}`, {
    body: JSON.stringify(user),
    method: 'PUT',
  }).then((res) => res.json());
}
