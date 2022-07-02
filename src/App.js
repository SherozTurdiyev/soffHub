import {Outlet} from 'react-router-dom'
import Navbar from './Componets/Navbar/Navbar'
import Footer from './Componets/Footer/Footer'
function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
