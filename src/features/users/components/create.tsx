import { UserModal } from '../../../components/modal/user-modal';

export default function UserRegistrationPage() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-start justify-center">
      <UserModal open onOpenChange={() => {}} />
    </div>
  );
}
