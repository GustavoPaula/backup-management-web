import { type FC } from 'react';

import { LoginForm } from '../components/forms/login-form';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-200 to-blue-200 p-4">
      <LoginForm />
    </div>
  );
};

export default Home;
