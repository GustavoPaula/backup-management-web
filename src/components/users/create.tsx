import { Header } from '../dashboard/header';
import { Sidebar } from '../dashboard/sidebar';
import { UserModal } from '../modal/user-modal';

export default function UserRegistrationPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex flex-1 items-start justify-center p-6 lg:p-8">
          <UserModal open onOpenChange={() => {}} />
        </main>
      </div>
    </div>
  );
}
