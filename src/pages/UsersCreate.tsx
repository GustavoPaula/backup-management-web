import { type FC } from 'react';

import { Header } from '../components/dashboard/header';
import { Sidebar } from '../components/dashboard/sidebar';
import UserRegistrationPage from '../components/users/create';

const UsersRegistration: FC = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 lg:p-8">
          <UserRegistrationPage />
        </main>
      </div>
    </div>
  );
};

export default UsersRegistration;
