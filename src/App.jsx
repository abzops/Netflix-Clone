import Navbar from "./Components/NavBar/Navbar.js";
import './App.css'
import Banner from "./Components/Banner/Banner.js";
import RowPost from "./Components/RowPost/RowPost.js";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title="Netflix Originals"/>
      <RowPost title="Actions" isSmall/>
    </div>
    
  );
}

export default App;
