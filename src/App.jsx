import './App.css';
import Check from './Components/Check';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Hero from './Components/Hero';
import Market from './Components/Market';
import Mining from './Components/Mining';
import Trade from './Components/Trade';
import WhyCrappo from './Components/WhyCrappo';

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <WhyCrappo />
      <Check />
      <Trade />
      <Market />
      <Mining />
      <Footer />
    </div>
  );
}

export default App;
