import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyles';
import Slider from './components/Slider';
import { SliderData } from './data/SliderData';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Slider slides={SliderData}/>
    </>
  );
}

export default App;
