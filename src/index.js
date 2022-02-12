import {render} from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Cults from './pages/Cults';
import Member from './pages/Member';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path= '/' exact element={<App />}/>
      <Route path= '/sobre' element={<About />}/>
      <Route path= '/seja-membro' element={<Member />}/>
      <Route path= '/programacao' element={<Cults />}/>
      <Route path= '/contato' element={<Contact />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

