import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './component/atomes/navbar';
import SectionHome from './component/molecules/sectionHome';


function App() {
  return (
    <div className="App">
    <NavBar/>
      
    <SectionHome/>
    </div>
  );
}

export default App;
