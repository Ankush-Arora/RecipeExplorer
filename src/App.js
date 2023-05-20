import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/> 
            <h1 className='heading'>Enter Dish Name</h1>
      <Recipes/>
      <Footer/>
    </div>
  );
}

export default App;
