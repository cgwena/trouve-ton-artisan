import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import List from './views/List-result-search';
import Details from './views/Details';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
