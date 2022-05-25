import React from 'react';
import Container from "react-bootstrap/Container";
import styled from 'styled-components';
import About from "./components/About";
import Feedback from "./components/Feedback";
import SearchCard from './components/SearchCard';
import Torrents from './components/Torrents';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";




import Header from "./components/header";
import Footer from "./components/footer";

const Wrapper=styled(Container)`
margin-top:70px;
`
;

 const App = ()=> {
  return (
    <Router>
    <Header/>
    <Wrapper>
    <Routes>

    <Route path="/About"  element={<About />} /> 
   
    <Route path="/Feedback"  element={<Feedback />} /> 

    <Route path="/"  element={<SearchCard />} /> 

    <Route path="/search"  element={<Torrents />} /> 

    </Routes>
    </Wrapper>
    <Footer/>
    </Router>
  );
}

export default App;
