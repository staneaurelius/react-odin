import { useState } from 'react'
import '../style/App.css'
import Header from './Header';
import CardGrid from './CardGrid';

function App() {
  const arrayList = [];

  for (let i = 1; i < 26; i++) {
    arrayList.push(i);
  };

  return (
    <>
      <Header />
      <CardGrid pokeList={arrayList} />
    </>
  );
}

export default App
