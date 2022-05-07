import './App.css';
import { About, Footer, Interests, Main } from './components';

function App() {
  return (
    <div className='ProfileContent'>
      <div className='DarkColor'>
        <Main />
        <About />
        <Interests />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
