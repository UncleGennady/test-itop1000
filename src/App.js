import logo from './logo.svg';
import './App.scss';
import Layout from './components/layout'
import Converter from "./components/converter";

function App() {
  return (
    <div className="App">
        <Layout>
            <Converter/>
        </Layout>
    </div>
  );
}

export default App;
