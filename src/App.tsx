import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default App;
