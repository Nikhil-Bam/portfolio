import './App.css';
import NavBar from './Component/NavBar';
import Hero from './Component/hero/Hero';
import About from './Component/about/About'; 
import Services from './Component/services/Services';
import MyWork from './Component/Mywork/MyWork';
import Contact from './Component/contact/Contact';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <About/>
     <Services/>
     <MyWork/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
