
import { Navbar } from './components/Header/Navbar';
import {useState, useEffect} from 'react'



function App() {


  let [books, setbooks] = useState(null);



  useEffect(()=>{

    async function loadData(){
      let jresponse= await fetch("http://localhost:1881/books");
      let data=await jresponse.json();

      setbooks(data);
    }

    loadData();

  },[])


  return (
    <div className="App">
      <Navbar data={books}></Navbar>
    </div>
  );
}

export default App;
