import { UserModal } from '../components/UserModal';

export function UserRegistrationPageView() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-start justify-center">
      <UserModal open onOpenChange={() => {}} />
    </div>
  );
}

