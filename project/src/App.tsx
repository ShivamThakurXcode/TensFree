import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import AdmitCard from './pages/AdmitCard';
import Results from './pages/Results';
import Admission from './pages/Admission';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Background from './components/Background';





function App() {
  return (
    <Router>
    
      <div className="min-h-screen  z-10  flex flex-col bg-transparent ">
        <Navbar />
       <Background />
     
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/admit-card" element={<AdmitCard />} />
            <Route path="/results" element={<Results />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;