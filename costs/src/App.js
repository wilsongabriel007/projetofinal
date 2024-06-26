import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/container';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/company">Sobre</Link>
          <Link to="/newproject">Novo Projeto</Link>
        </nav>

        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/company" element={<Company />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>

        <p>Footer</p>
      </div>
    </Router>
  );
}

export default App;
