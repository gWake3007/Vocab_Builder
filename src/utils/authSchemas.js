import * as Yup from 'yup';

export const signUpRequestSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'User email as a string with a valid email address format: test@gmail.com'
    )
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*d)[a-zA-Zd]{7}$/,
      'User password as a string which consists of 6 English letters and 1 number: testtt1'
    )
    .required('Password is required'),
});

export const signUpResponseSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'User email as a string with a valid email address format: test@gmail.com'
    )
    .email('Invalid email address')
    .required('Email is required'),
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  token: Yup.string()
    .matches(
      /^[A-Za-z0-9\-_]+$/,
      'Token must be a valid string containing only alphanumeric characters, hyphens, or underscores'
    )
    .required('User token is required'),
});

export const signInRequestSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'User email as a string with a valid email address format: test@gmail.com'
    )
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*d)[a-zA-Zd]{7}$/,
      'User password as a string which consists of 6 English letters and 1 number: testtt1'
    )
    .required('Password is required'),
});

export const signInResponseSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'User email as a string with a valid email address format: test@gmail.com'
    )
    .email('Invalid email address')
    .required('Email is required'),
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),

  token: Yup.string()
    .matches(
      /^[A-Za-z0-9\-_]+$/,
      'Token must be a valid string containing only alphanumeric characters, hyphens, or underscores'
    )
    .required('User token is required'),
});

export const getCurrentResponseSchema = Yup.object().shape({
  _id: Yup.string()
    .matches(
      /^[a-fA-F0-9]{24}$/,
      '_id must be a valid MongoDB ObjectId (24-character hexadecimal string)'
    )
    .required('_id is required'),
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'User email as a string with a valid email address format: test@gmail.com'
    )
    .email('Invalid email address')
    .required('Email is required'),
  token: Yup.string()
    .matches(
      /^[A-Za-z0-9\-_]+$/,
      'Token must be a valid string containing only alphanumeric characters, hyphens, or underscores'
    )
    .required('User token is required'),
});

export const singOutResponseSchema = Yup.object().shape({
  message: Yup.string()
    .matches(
      /^Sign out success$/,
      'Message must exactly match "Sign out success"'
    )
    .required('Message is required'),
});
