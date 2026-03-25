import { LoginForm } from '../../../components/forms/login-form';

export function HomePageView() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-100 to-blue-100 p-4">
      <LoginForm />
    </div>
  );
}
