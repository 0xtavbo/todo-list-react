import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./components/layout/Layout";
import Navbar from "./components/navbar/Navbar";
import Routes from "./routes/Routes";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
      <GlobalStyle />
    </Layout>
  );
}

export default App;
