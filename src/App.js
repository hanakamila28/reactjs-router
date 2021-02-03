import React from 'react';
import Utama from './Components/utama';
import Navbar from './Components/media';
import './App.css'

class App extends React.Component{
  render(){
    return(
      <div className="grid-container">
        <header>
          <Navbar page1="Beranda" page2="Tentang Saya" page3="Karya" page4="Kontak"
            link1="/" link2="/tentangsaya" link3="/karya" link4="/kontak"
            logo="Naura Yasmin">
          </Navbar>
        </header>
        <hr />
        <main>
          <div className="content">
            <div className="main">
              <Utama />
            </div>
          </div>
        </main>
        <footer>Copyright by Naura</footer>
      </div>
    );
  }
}

export default App;
