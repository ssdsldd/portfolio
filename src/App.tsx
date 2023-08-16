import './App.css';
import styled from 'styled-components';
import { Header } from './layouts/header/Header';
import { Main } from './layouts/sections/main/Main';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;

