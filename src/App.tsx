import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

import { Router } from './Router';

function App() {
  return (
    <Theme>
      <Router />
    </Theme>
  );
}

export default App;
