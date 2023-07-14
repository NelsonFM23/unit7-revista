import './App.css';
import NavBar from "./components/NavBar/Navbar";
import Container from "./components/Container/Container";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>  
      <NavBar />
      <Container>
        <AboutMe/>
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;