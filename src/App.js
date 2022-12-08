import './App.css';
import ListTree from "./tree/listTree";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";

import Navbar from "./layout/Navbar";
import ListTreebyGroup from './tree/listTreebyGenre';


class App extends Component {
    render() {
        return (
            <div className="App">
              <Navbar/>
              <ListTree/>
              <ListTreebyGroup/>
            </div>

        )
    }
}

export default App;
