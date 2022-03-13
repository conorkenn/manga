import './App.css';
import Card from './components/Card';
import CardGrid from './components/CardGrid';
import favManga from './assets/favManga';

const favMangaToDisplay = favManga.map((manga)=>{
  const {id} = manga
  return(
    <Card {...manga}/>
  )
})

function App() {
  return (
    <CardGrid>
      {favMangaToDisplay}
    </CardGrid>
  );
}

export default App;
