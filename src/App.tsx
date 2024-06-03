import { Provider } from "react-redux";

import { store } from "@store";
import { MuiThemeProvider } from "@providers";
import { LocalMultiplayerGame } from "@components/bussines";

import "./styles/index.scss";

function App() {
  return (
    // <PersistGate loading={null} persistor={persistor}>
    <MuiThemeProvider>
      <Provider store={store}>
        <LocalMultiplayerGame />
      </Provider>
    </MuiThemeProvider>
    // </PersistGate>
  );
}

export default App;
