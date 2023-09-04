import './App.css';

import Home from './component/Home'
import Header from './component/Header'
import About from './component/About'
import Contact from './component/Contact'
import Error from './component/Error'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
