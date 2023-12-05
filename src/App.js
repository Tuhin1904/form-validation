import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import ContactForm from './Components/ContactForm/ContactForm';
// import { store } from './redux/store';

function App() {
  // store.subscribe(() => {
  //   if (store.getState().form) {
      
  //     const persistedFormData = store.getState().form.formData;

  //     console.log('Persisted Form Data:', persistedFormData);
  //   }
  // });
  return (
    <div className='App'>
      <h1 className='my-5 text-4xl text-amber-800'>Practice Set - 2 </h1>
      <Routes>
        <Route path="/" element={<>
        <Navbar/>
        <Home/>
        </>}/>
        <Route path="/contact" element={<>
        <Navbar/>
        <ContactForm/>
        </>}/>
      </Routes>
    </div>
  );
}

export default App;
