import logo from './logo.svg';
import './App.css';
import './assets/output.css';
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';
import PractitionerList from './Components/PractitionerList';

function App() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <PractitionerList />
        
      
    </div>
  );
}

export default App;
