import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Category from './views/Category-search';
import Result from "./views/Search-results";
import Details from './views/Details';
import Page404 from './views/404';
import data from './datas/datas.json'
import './App.scss';


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
        <Route path="/results" element={<Result data={data} searchTerm={searchTerm} />} />
        <Route path="/details/:artisanId" element={<Details />} />
        <Route path="/category/:artisanCategory" element={<Category />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;