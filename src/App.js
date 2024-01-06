import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import List from './views/List-result-search';
import Results from "./views/Search-results";
import Details from './views/Details';
import Page404 from './views/404';
import './App.scss';
import list from './datas/datas.json'



function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results data={list} searchTerm={searchTerm} />} />
        <Route path="/details/:artisanId" element={<Details />} />
        <Route path="/:artisanCategory" element={<List />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
