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
    state = {
        cards: [
            {id: 0, immagine: california, titolo: "California", prezzo: 1.99},
            {id: 1, immagine: dragon, titolo: "Dragon", prezzo: 1.99},
            {id: 2, immagine: dynamite, titolo: "Dynamite", prezzo: 1.99},
            {id: 3, immagine: philadelphia, titolo: "Philadelphia", prezzo: 1.99},
            {id: 4, immagine: rainbow, titolo: "Rainbow", prezzo: 1.99},
            {id: 5, immagine: shrimp, titolo: "Shrimp", prezzo: 1.99},
        ]
    }

    render() {
        return (
            <>
                <Navbar/>
                <div className='container'>
                    <h1>Cosa vuoi ordinare?</h1>
                    <hr/>
                    <div className='row'>
                        {/*uso il map di javascript*/}
                        {this.state.cards.map(card => (
                            <Card
                                key={card.id}
                                immagine={card.immagine}
                                titolo={card.titolo}
                                prezzo={card.prezzo}
                            />
                        ))
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default App;
