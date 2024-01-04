import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import List from './views/List-result-search';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
