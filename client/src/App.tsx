import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import PromotionBanner from './components/PromotionBanner';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <PromotionBanner />
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
