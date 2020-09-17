import React from 'react';

import KRInput from 'src/components/KRInput';
import KRButton from 'src/components/KRButton';
import KRButtonPlain from 'src/components/KRButtonPlain';
import {authenticate, registerUser} from 'src/services/auth.service';
import KRResponsiveBlock from 'src/components/KRResponsiveBlock';

import Logo from 'src/assets/images/the-solevilla.png';

export const Login = () => {
  const [error, setError] = React.useState('');
  const [processing, setProcessing] = React.useState(false);
  const [register, setRegister] = React.useState<string | null>(null);
  const [{email, password}, setCredentials] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    const command =
      register !== null
        ? () => registerUser(email, password, register)
        : () => authenticate({email, password});

    setProcessing(true);

    const error = await command();

    setProcessing(false);

    if (!error) return;

    setError(register !== null ? error : 'Invalid Email or Password!');
  };

  return (
    <div className="flex flex-1 flex-col items-center pt-20">
      <img alt="Logo" src={Logo} className="w-40" />
      <label className="font-medium text-2xl">My Pet Projects - Todo App</label>
      <KRResponsiveBlock>
        <form action="#" onSubmit={handleSubmit}>
          {error && <div className="w-full mb-4 flex justify-center text-red-500">{error}</div>}
          <KRInput
            shadow
            name="email"
            value={email}
            label="Email:"
            onInputChange={value => setCredentials(state => ({...state, email: value}))}
          />
          <KRInput
            shadow
            className="mt-4"
            name="password"
            type="Password"
            value={password}
            label="Password:"
            onChange={e => setCredentials(state => ({...state, password: e.target.value}))}
          />
          {register !== null && (
            <KRInput
              shadow
              name="fullname"
              label="Fullname:"
              className="mt-4"
              value={register}
              onInputChange={value => setRegister(value)}
            />
          )}
          <KRButton onClick={handleSubmit} disabled={processing} className="mt-4">
            Submit
          </KRButton>
        </form>
        <div className="flex flex-row flex-1 flex-wrap justify-between">
          <KRButtonPlain>Forgot Password?</KRButtonPlain>
          <KRButtonPlain onClick={() => setRegister(register !== null ? null : '')}>
            {register !== null
              ? 'Have an existing account? Sign-in now!'
              : `Don't have an account yet? Register now!`}
          </KRButtonPlain>
        </div>
      </KRResponsiveBlock>
    </div>
  );
};

export default React.memo(Login);
