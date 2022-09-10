import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Check from './Components/Check';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Hero from './Components/Hero';
import Market from './Components/Market';
import Mining from './Components/Mining';
import Trade from './Components/Trade';
import WhyCrappo from './Components/WhyCrappo';
AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1000,
});

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
