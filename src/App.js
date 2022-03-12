import './App.css';
import Card from './components/Card';
import favManga from './assets/favManga';

const favMangaToDisplay = favManga.map((manga)=>{
  const {id} = manga
  return(
    <Card {...manga}/>
  )
})

function App() {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-4 gap-6'>
        {favMangaToDisplay}
      </div>
    </div>
  );
}

export default App;
