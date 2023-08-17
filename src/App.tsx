import './App.css';
import styled from 'styled-components';
import { Header } from './layouts/header/Header';
import { Main } from './layouts/sections/main/Main';
import { Skills } from './layouts/sections/skills/Skills';
import { Works } from './layouts/sections/works/Works';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;

