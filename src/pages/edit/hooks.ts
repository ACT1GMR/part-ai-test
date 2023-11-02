import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import UserModel from '../../types/user.model';
import { deleteUser, fetchUser, updateUser } from './editAPI';
import { useNavigate, useNavigation } from 'react-router';

export function useGetUser(id) {
  return useQuery<UserModel>({
    queryKey: ['FETCH_USER', id],
    queryFn: () => fetchUser(id),
  });
}

export function useUpdateUser(userId) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: () => afterSuccessMutation(userId, { navigate, queryClient }),
    mutationKey: ['UPDATE_USER'],
    mutationFn: updateUser,
  });
}

export function useDeleteUser(userId) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: () => afterSuccessMutation(userId, { navigate, queryClient }),
    mutationKey: ['DELETE_USER'],
    mutationFn: deleteUser,
  });
}

async function afterSuccessMutation(userId, { navigate, queryClient }) {
  await queryClient.invalidateQueries({
    queryKey: ['FETCH_USERS', ['FETCH_USER', userId]],
  });
  navigate('/part-ai-test');
  return '';
}
