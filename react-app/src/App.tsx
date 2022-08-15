import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import SideBar from './components/SideBar';


function App() {
  async function doFetch(search: string) {
    const res = await fetch(`http://localhost:5000/superheroes/search/${search}`);
    const data = await res.json();
    return data;
  }

  const [hero, setHero] = useState({});
  async function doFetchHero(id: number) {
    const res = await fetch(`http://localhost:5000/superheroes/getherobyid/${id}`);
    const data = await res.json();
    setHero(data);
  }

  return (
    <div className="App">
      <div className='lftPanel'>
        <Search />
      </div>
      <SideBar />
    </div>
  );
}
export default App;
