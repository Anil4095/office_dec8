
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Stories from './component/Stories';
import Post from './Post/Post';
import Author from './Author/Author';
import Navbar from './component/nav/Navbar';





function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Switch>
     <Route exact path="/" component={Stories}/>
     <Route exact path="/Post" component={Post}/>
     <Route exact path="/Author"  component={Author}/>
     </Switch>
     
     </BrowserRouter>
  </>
  );
}

export default App;
