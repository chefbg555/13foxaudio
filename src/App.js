import React from 'react'
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import home from './pages/Home'
import aboutus from './pages/Aboutus'
import content from './pages/Content'
import contact from './pages/Contact'
import Navbar from  './components/Navbar'

import './App.css';

class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={home}/>
        <Route path="/aboutus" component={aboutus}/>
        <Route path="/content"component={content}/>
        <Route path="/contact"component={contact}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
