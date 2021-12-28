import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '../theme';
import Views from '../views';
import I18NProvider from './I18NProvider';

const App = () => (
  <RecoilRoot>
    <ThemeProvider>
      <Suspense fallback={null}>
        <I18NProvider>
          <Views />
        </I18NProvider>
      </Suspense>
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
