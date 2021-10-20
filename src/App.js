import './App.css';
import { Sayac } from './components/Sayac';


function App() {

  let fatihinSoyadi = 'kose'

  let Selamla = (isim) =>{
    return "Merhaba "+isim
  }




  return (
    <div className="App">
      <Sayac fs={fatihinSoyadi} sg={fatihinSoyadi} fatihinselami={Selamla}></Sayac>
    </div>
  );
}

export default App;
