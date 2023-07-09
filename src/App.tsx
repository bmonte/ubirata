import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Navbar } from './layouts';
import { RoutesComponent } from './routes';
import { GlobalStyle, theme } from './styles';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />

        <RoutesComponent />
      </Router>

      <GlobalStyle />
    </ThemeProvider>
  );
}
