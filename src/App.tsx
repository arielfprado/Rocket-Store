import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "./contexts";

import { theme } from "./styles/theme";

import { AppRoutes } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyles />
        <AppRoutes />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
