import './App.css';
import styled from 'styled-components';
import { Header } from './layouts/header/Header';
import { Main } from './layouts/sections/main/Main';
import { Skills } from './layouts/sections/skills/Skills';
import { Works } from './layouts/sections/works/Works';
import { Testimony } from './layouts/sections/testimony/Testimony';
import { Contact } from './layouts/sections/contact/Contact';
import { Slogan } from './layouts/sections/slogan/Slogan';
import { Footer } from './layouts/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

