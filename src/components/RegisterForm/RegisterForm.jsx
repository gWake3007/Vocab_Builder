import clsx from 'clsx';
import style from './RegisterForm.module.css';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AuthFormInput from '../AuthFormInput/AuthFormInput.jsx';

const RegisterForm = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <div>
      <h2></h2>
      <p></p>
      <Formik>
        <Form>
          <div>
            <AuthFormInput />
            <AuthFormInput />
            <AuthFormInput />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
