import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Angie Pastelería";
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;