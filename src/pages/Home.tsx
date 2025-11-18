import { LoginForm } from '../components/forms/login-form';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 p-4">
      <LoginForm />
    </div>
  );
}

export default Home;
