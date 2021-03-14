
import './App.css';
import Carousels from './component/Carousel';
import Filter from './component/Filter';
import Header from './component/Header';

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header />

      </div>
      <div className="content">
      <div className="contentContainer">
      <div className="filterContainerApp">
     <Filter/>
</div>
    <div className="carousel">
      <Carousels />
    </div>
      
      </div>
      


      </div>



    </div>
  );
}

export default App;
