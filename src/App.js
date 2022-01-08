import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Card from "./components/card";
import React, {Component} from "react";

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
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>

                    </div>
                </div>
            </>
        );
    }
}

export default App;
