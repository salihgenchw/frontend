import { Navbar } from './components/Header/Navbar';
import {Route} from "react-router-dom"
import { connect } from 'react-redux';
import Products from './components/Products';
import Fav  from './components/Fav';


function App(props) {
  // console.log(props.bookList);
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Products}/>
      <Route path="/fav" component={Fav}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bookList : state.bookList
  }
}

export default connect(mapStateToProps)(App);
