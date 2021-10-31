import react, { useState } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function App() {
  const [ currentPage, setCurrentPage ] = useState('About')
  function renderPage() {
    if (currentPage === 'About') {
      return <About/>
    } else if (currentPage === 'Contact') {
      return <Contact/>
    } else if (currentPage === 'Portfolio') {
      return <Portfolio/>
    } else if (currentPage === 'Resume') {
      return <Resume/>
    } 
  }


  return (
    <>
    {/* <button onClick={() => {setCurrentPage("Contact")}}>Change to Contact</button>
    <button onClick={() => {setCurrentPage("About")}}>Change to About</button> */}

    <Header setPage={setCurrentPage}/>
    {renderPage()}
   


    </>
  );
}

export default App;
