import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Works from "./components/Works"
import Contact from "./components/Contact"
import './App.css'

const  App = () =>{
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/my-Website/" component={Home} />
          <Route exact path="/my-Website/about" component={About} />
          <Route exact path="/my-Website/skills" component={Skills} />
          <Route exact path="/my-Website/works" component={Works} />
          <Route exact path="/my-Website/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;