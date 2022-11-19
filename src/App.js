
import './App.css';
import Bodypart from './components/bodypart/Bodypart';
import Feature from './components/features/Feature';
import Heading from './components/Header/Heading';
import Lowerbody from './components/lowerbody/Lowerbody';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Navbar/>
      <Bodypart/>
      <Lowerbody/>
      <Feature/>
    </div>
  );
}

export default App;
