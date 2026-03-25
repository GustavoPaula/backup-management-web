import { type FC } from 'react';

import { LoginForm } from '../../../components/forms/login-form';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-blue-100 p-4">
      <LoginForm />
    </div>
  );
};

export default Home;

