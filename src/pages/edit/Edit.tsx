import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../components/input/Input';
import { useFormik } from 'formik';
import { useDeleteUser, useGetUser, useUpdateUser } from './hooks';
import localization from '../../constant/localization';
import Button from '../../components/button/Button';

export default function Edit() {
  const { userId } = useParams();
  const { data: user, isLoading } = useGetUser(userId);
  const { mutate: mutateDelete, isPending: deletePending } =
    useDeleteUser(userId);
  const { mutate: mutateUpdate, isPending: updatePending } =
    useUpdateUser(userId);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      birthdate: '',
      phoneNumber: '',
      company: '',
      country: '',
      city: '',
      street: '',
      zipcode: '',
    },
    onSubmit: (values) => {
      mutateUpdate({ id: userId, ...values });
    },
  });
  useEffect(() => {
    if (user && formik) {
      formik.setValues({
        name: user?.name,
        email: user?.email,
        birthdate: user?.dateOfBirth,
        phoneNumber: user?.phoneNumber,
        company: user?.company,
        country: user?.country,
        city: user?.city,
        street: user?.street,
        zipcode: user?.zipcode,
      });
    }
  }, [user]);
  return (
    <div className='m-auto grid w-[580px] gap-[28px] rounded-[24px]  bg-[#020B1F] p-[40px] shadow-[24px_24px_96px_-0_#0C132C]'>
      <h3 className='text-2xl text-[#FBFDFE]'>{localization.editUser}</h3>
      <div className='border-b-[2px] border-[#182040]'></div>
      <div className='grid place-content-center'>
        <div className='grid place-content-center rounded-full border-[3px] border-[#0559FD] p-[4px] text-center'>
          <img
            className='min-h-[128px] min-w-[128px] rounded-full'
            src={user?.avatar}
            alt={isLoading ? 'loading' : user?.username}
          />
        </div>
      </div>
      <form
        className='grid grid-cols-12 gap-[28px]'
        onSubmit={formik.handleSubmit}
      >
        <Input
          name='name'
          containerClassName='col-span-6'
          className='w-full'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <Input
          name='birthdate'
          containerClassName='col-span-6'
          className='w-full'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          name='email'
          containerClassName='col-span-6'
          className='w-full'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          name='phoneNumber'
          containerClassName='col-span-6'
          className='w-full'
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        <Input
          name='country'
          containerClassName='col-span-3'
          className='w-full'
          onChange={formik.handleChange}
          value={formik.values.country}
        />
        <Input
          name='city'
          containerClassName='col-span-3'
          className='w-full'
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        <Input
          name='street'
          containerClassName='col-span-3'
          className='w-full'
          onChange={formik.handleChange}
          value={formik.values.street}
        />
        <Input
          name='zipcode'
          containerClassName='col-span-3'
          className='w-full'
          onChange={formik.handleChange}
          value={formik.values.zipcode}
        />
        <Input
          name='company'
          containerClassName='col-span-12'
          className='w-full'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Button
          disabled={updatePending}
          isLoading={updatePending}
          type='submit'
          className='col-span-6 w-full'
        >
          {localization.edit}
        </Button>
        <Button
          disabled={deletePending}
          isLoading={deletePending}
          className='col-span-6 w-full bg-[#FF3231]'
          onClick={(e) => {e.preventDefault();mutateDelete(userId)}}
        >
          {localization.remove}
        </Button>
      </form>
    </div>
  );
}
