

import { useState,useEffect } from 'react';
import Header from './components/Header/Header';
import axios from 'axios';
import { CharacterGrid } from './components/Characters';
import './App.css';
import Search from './components/Search';


function App() {
const [item, setItem] = useState([])
const [loading,setLoading] = useState(true)
const [query, setQuery] = useState('')


useEffect(() => {
  const fetchItem = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    setItem(result.data)
    setLoading(false)
  }
  fetchItem()
},[query])

const queryFunction = (q) =>{
  setQuery(q)
}
  return (
    <div className="container">
        <Header />
        <Search getQuery={queryFunction} />
        <CharacterGrid loading={loading} item={item} />

    </div>
  );
}

export default App;
