import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Experiences, Contact, Footer, Header, Nav, Portifolio } from "./components"


function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Portifolio />
      <Routes>
        <Route path='/' element={<Contact sucess={false} />} />
      </Routes>
      <Routes>
        <Route path='/submited' element={<Contact sucess={true} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
