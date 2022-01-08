import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Card from "./components/card";
import React, {Component} from "react";
import california from './images/california.png'
import dragon from './images/dragon.png'
import dynamite from './images/dynamite.png'
import philadelphia from './images/philadelphia.png'
import rainbow from './images/rainbow.png'
import shrimp from './images/shrimp.png'

// function App() {
class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <div className='container'>
                    <h1>Cosa vuoi ordinare?</h1>
                    <hr/>
                    <div className='row'>
                        <Card
                        immagine={california}
                        titolo="Califonia"
                        prezzo={1.99}/>
                        <Card
                            immagine={dragon}
                            titolo="Dragon"
                            prezzo={1.99}/>
                        <Card
                            immagine={dynamite}
                            titolo="Dynamite"
                            prezzo={1.99}/>
                        <Card
                            immagine={philadelphia}
                            titolo="Philadelphia"
                            prezzo={1.99}/>
                        <Card
                            immagine={rainbow}
                            titolo="Rainbow"
                            prezzo={1.99}/>
                        <Card
                            immagine={shrimp}
                            titolo="Shrimp"
                            prezzo={1.99}/>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
