import React, {useState} from 'react';
import "./index.css";

import Arkaplan from "./Bilesenler/Arkaplan";
import Sonuc from "./Bilesenler/Sonuc";
import Arama from './Bilesenler/Arama/AramaCubugu';

function App() {
  const [havaDurumu, belirtHavaDurumu] = useState({});
  
  
  return (
    <section className='uygulama'>
      <Arkaplan arkaplan={havaDurumu.weather && havaDurumu.weather[0].main}/>
      <div id='baslik'>Hava Durumu </div>
      <Arama belirtHavaDurumu={belirtHavaDurumu}/>
      <Sonuc hava={havaDurumu}/>
    
    </section>
  );
  }

export default App;
