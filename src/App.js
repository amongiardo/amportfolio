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
import card from "./components/card";

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

    handleDelete = cardId => {
        // const updateCards = this.state.cards.filter(card => card.id != cardId);
        // this.setState({cards : updateCards});
        // oppure dando lo stesso nome alla costante
        const cards = this.state.cards.filter(card => card.id !== cardId);
        this.setState({cards})
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
                                onDelete = {this.handleDelete}
                                card={card}
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
