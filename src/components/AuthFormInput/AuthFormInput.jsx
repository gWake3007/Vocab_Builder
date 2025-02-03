import { ErrorMessage, Field } from 'formik';
import { useId, useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

import style from './AuthFormInput.module.css';

const AuthFormInput = ({ errors, touched, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const id = useId();

  const getTypeForInput = () => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    } else return type;
  };

  return (
    <div className={style.wrap}>
      <label className={style.label} htmlFor={`${type}${id}`}>
        {placeholder}
      </label>
      <Field
        className={`${
          errors.password && touched.password ? style.inputError : ''
        } ${style.input}`}
        type={getTypeForInput()}
        name={type}
        placeholder={placeholder}
        id={`${type}${id}`}
      />
      <ErrorMessage className={style.error} name={type} component="span" />
      {getTypeForInput() === 'password' && (
        <button
          type="button"
          className={style.btnHide}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <HiOutlineEye size={16} />
          ) : (
            <HiOutlineEyeOff size={16} />
          )}
        </button>
      )}
    </div>
  );
};

export default AuthFormInput;
