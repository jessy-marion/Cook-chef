import Header from "./Components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
