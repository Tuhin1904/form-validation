import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import './contactForm.css';
import { submitForm } from '../../redux/formSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [isSubmitted, setSubmitted] = useState(false);

  const schema = Yup.object().shape({
    firstName: Yup.string().min(2).required('First Name is required'),
    middleName: Yup.string(),
    lastName: Yup.string().min(2).required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobileNumber: Yup.string().min(10, 'Minimum 10 digits').required('Mobile Number is required'),
    message: Yup.string().max(1000).required('Message is required'),
    address: Yup.string().required('Address is required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form submit');
    try {
      dispatch(submitForm(data));
      reset();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.log('error on form submission', err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='my-3'>
          <label htmlFor='firstName' className='form-label'>
            First Name:
          </label>
          <input
            type='text'
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            id='firstName'
            placeholder='e.g. Tuhin'
            {...register('firstName')}
          />
        </div>
        {errors.firstName && <p className='invalid-feedback'>{errors.firstName.message}</p>}

        <div className='my-3'>
          <label htmlFor='middleName' className='form-label'>
            Middle Name:
          </label>
          <input
            type='text'
            autoComplete='off'
            className='form-control'
            id='middleName'
            placeholder='e.g. Kumar'
            {...register('middleName')}
          />
        </div>

        <div className='my-3'>
          <label htmlFor='lastName' className='form-label'>
            Last Name:
          </label>
          <input
            type='text'
            autoComplete='off'
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            id='lastName'
            placeholder='e.g. Ghosh'
            {...register('lastName')}
          />
        </div>
        {errors.lastName && <p className='invalid-feedback'>{errors.lastName.message}</p>}

        <div className='my-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            autoComplete='off'
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id='email'
            placeholder='e.g. tuhin@example.com'
            {...register('email')}
          />
        </div>
        {errors.email && <p className='invalid-feedback'>{errors.email.message}</p>}

        <div className='my-3'>
          <label htmlFor='mobileNumber' className='form-label'>
            Mobile Number
          </label>
          <input
            type='text'
            autoComplete='off'
            className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
            id='mobileNumber'
            placeholder='e.g., 9593722516'
            {...register('mobileNumber')}
          />
        </div>
        {errors.mobileNumber && <p className='invalid-feedback'>{errors.mobileNumber.message}</p>}

        <div className='my-3'>
          <label htmlFor='message' className='form-label'>
            Message
          </label>
          <textarea
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            id='message'
            placeholder='Your message...'
            {...register('message')}
          />
        </div>
        {errors.message && <p className='invalid-feedback'>{errors.message.message}</p>}

        <div className='my-3'>
          <label htmlFor='address' className='form-label'>
            Address
          </label>
          <textarea className='form-control' id='address' placeholder='Your address...' {...register('address')} />
        </div>

        <button
          type='submit'
          className='p-1 text-white bg-green-500 rounded-md btn btn-primary hover:bg-green-600 hover '>
          Submit
        </button>
      </form>
      {isSubmitted && (
        <div>
          <span role='img' aria-label='Check Mark'>
            ✅
          </span>
          Form submitted successfully!
        </div>
      )}
    </>
  );
};

export default ContactForm;
