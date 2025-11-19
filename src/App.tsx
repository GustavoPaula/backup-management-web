import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

import { AuthProvider } from './components/providers/AuthProvider';
import { Router } from './Router';

function App() {
  return (
    <Theme>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Theme>
  );
}

export default App;
