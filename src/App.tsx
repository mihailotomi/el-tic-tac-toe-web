import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { store } from "@store";
import { MuiThemeProvider, router } from "@providers";

import "./styles/index.scss";

function App() {
  return (
    // <PersistGate loading={null} persistor={persistor}>
    <MuiThemeProvider>
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </MuiThemeProvider>
    // </PersistGate>
  );
}

export default App;
