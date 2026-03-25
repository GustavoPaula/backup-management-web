import { type FC } from 'react';

import { Header } from '../../dashboard/components/header';
import { Sidebar } from '../../dashboard/components/sidebar';
import UserRegistrationPage from '../components/create';

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



