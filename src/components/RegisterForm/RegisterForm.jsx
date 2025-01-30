import clsx from 'clsx';
import style from './RegisterForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
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
            <label htmlFor=""></label>
            <Field></Field>
            <ErrorMessage></ErrorMessage>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
