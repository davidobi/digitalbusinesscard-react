import './App.css';
import { About, Footer, Interests, Main } from './components';

function App() {
  return (
    <div className='ProfileContent'>
      <Main />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
