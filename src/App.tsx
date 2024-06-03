import { Provider } from "react-redux";

import { store } from "@store";
import { Board } from "@components/bussines";
import { MuiThemeProvider } from "@providers";

import "./styles/index.scss";

function App() {
  return (
    // <PersistGate loading={null} persistor={persistor}>
    <MuiThemeProvider>
      <Provider store={store}>
        <Board onAnswerCheck={() => {}} onValidAnswer={() => {}} />
      </Provider>
    </MuiThemeProvider>
    // </PersistGate>
  );
}

export default App;
