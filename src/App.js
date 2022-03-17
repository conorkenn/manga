import './App.css';
import Card from './components/Card';
import CardGrid from './components/CardGrid';
import favManga from './assets/favManga';
import Header from './components/Header';
import React from 'react';

const favMangaToDisplay = favManga.map((manga)=>{
  const {id} = manga
  return(
    <Card {...manga}/>
  )
})

function App() {
  return (
    <React.Fragment>
      <Header />
      <CardGrid>
        {favMangaToDisplay}
      </CardGrid>
    </React.Fragment>
  );
}

export default App;
