import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from './homeAPI';
import localization from './../../constant/localization';
import UserModel from './../../types/user.model';
import { getAge } from '../../helper/utils';

export function useGetUsers() {
  return useQuery<UserModel[]>({
    queryKey: ['FETCH_USERS'],
    queryFn: fetchUsers,
  });
}

export function useGetUsersGridData() {
  const { data: users, ...other } = useGetUsers();
  const { company, email, phoneNumber, address, age, username } = localization;
  if (users) {
    return {
      ...other,
      gridData: {
        names: [username, age, phoneNumber, email, address, company],
        rows: users.map((user) => {
          const {
            id,
            name,
            dateOfBirth,
            phoneNumber,
            email,
            city,
            street,
            company,
          } = user;
          return [
            id,
            name,
            getAge(dateOfBirth),
            phoneNumber,
            email,
            [city, street].join(', '),
            company,
          ];
        }),
      },
    };
  }
  return { gridData: null, ...other };
}
